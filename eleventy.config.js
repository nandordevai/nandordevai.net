import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import linkAttributes from 'markdown-it-link-attributes';

export default function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        'md',
        'css',
        'njk',
        'js',
    ]);

    eleventyConfig.addPreprocessor('drafts', 'njk,md', (data, _content) => {
		if (data.draft === true) {
			return false;
		}
    });

    eleventyConfig.addShortcode('gallery', async function () {
        try {
            const files = await readdir(`./src/img/${this.page.fileSlug}`);
            const links = files.filter(file => file !== '.DS_Store').map(file => `
                <a href="/img/${this.page.fileSlug}/${file}">
                    <img class="thumbnail" src="/img/${this.page.fileSlug}/${file}">
                </a>`).join('');
            return `<div class="gallery">${links}<div>`;
        } catch (err) {
            return ''
        }
    });

    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/*.pdf');
    eleventyConfig.addPassthroughCopy('src/CNAME');
    eleventyConfig.addPassthroughCopy('src/index.html');
    eleventyConfig.addGlobalData('layout', 'base');

    const linkAttributesOptions = {
        attrs: {
            target: '_blank',
            rel: 'noreferrer',
        },
    };

    eleventyConfig.amendLibrary('md', mdLib => mdLib.use(linkAttributes, linkAttributesOptions));

    eleventyConfig.addPreprocessor('heading', 'md', (data, content) => {
        if (data.title !== 'CV' && (data.tags?.includes('post') || data.tags?.includes('page'))) {
            return content.replace(/^#/gm, '##');
        }
    });

    eleventyConfig.addFilter('slugify', function(value) {
        return value.toLowerCase().replaceAll(' ', '-');
    });

    eleventyConfig.addCollection('projects', async (collectionsApi) => {
        return collectionsApi.getFilteredByTag('project').map((project) => {
            if (existsSync(`./src/img/${project.page.fileSlug}/thumbnail.jpg`)) {
                project.thumbnail = 'thumbnail.jpg';
            } else if (existsSync(`./src/img/${project.page.fileSlug}/thumbnail.png`)) {
                project.thumbnail = 'thumbnail.png';
            }
            return project;
        });
    });

    eleventyConfig.addCollection('pages', async (collectionsApi) => {
        return collectionsApi.getAll().filter((item) => {
            return item.data.tags.includes('page');
        }).sort((a, b) => {
            return a.data.position - b.data.position;
        });
    })

    return {
	    htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'docs',
            layouts: '../_layouts',
            includes: '../_includes',
        },
    };
}
import { readdir } from 'node:fs/promises';
import linkAttributes from 'markdown-it-link-attributes';

export default function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        'md',
        'css',
        'njk',
        'js',
    ]);

    eleventyConfig.addPreprocessor('drafts', 'njk,md', (data, _content) => {
		if (data.draft) {
			return false;
		}
    });

    eleventyConfig.addShortcode('gallery', async function () {
        try {
            const files = await readdir(`./src/img/${this.page.fileSlug}`);
            const links = files.map(file => `
                <a href="/img/${this.page.fileSlug}/${file}">
                    <img class="thumbnail" src="/img/${this.page.fileSlug}/${file}">
                </a>`).join('');
            return `<div class="gallery">${links}<div>`;
        } catch (err) {
            return ''
        }
    });

    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/components');
    eleventyConfig.addPassthroughCopy('src/*.pdf');
    eleventyConfig.addPassthroughCopy('src/CNAME');
    eleventyConfig.addPassthroughCopy('src/index.html');
    eleventyConfig.addPassthroughCopy({ 'src/main.css': 'main.css' });
    eleventyConfig.addGlobalData('layout', 'base');

    const linkAttributesOptions = {
        attrs: {
            target: '_blank',
            rel: 'noreferrer',
        },
    };

    eleventyConfig.amendLibrary('md', mdLib => mdLib.use(linkAttributes, linkAttributesOptions));

    return {
	    htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'docs',
            layouts: '../_layouts',
        },
    };
}
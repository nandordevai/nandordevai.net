export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/*.pdf');
    eleventyConfig.addPassthroughCopy('src/CNAME');
    eleventyConfig.addPassthroughCopy('src/index.html');
    eleventyConfig.addPassthroughCopy({ 'src/main.css': 'main.css' });
    eleventyConfig.addGlobalData('layout', 'base');

    // eleventyConfig.addPreprocessor('heading', 'md', (data, content) => {
    //     if (data.tags?.includes('post')) {
    //         return content.replaceAll('# ', '## ');
    //     }
    // });

    return {
        dir: {
            input: 'src',
            output: 'docs',
            // includes: '../_includes',
            layouts: '../_layouts',
        },
    };
}
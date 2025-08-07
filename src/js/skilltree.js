const data = {
    name: 'Skills',
    children: [
        {
            name: 'Creative coding',
            children: [
                {
                    name: 'p5.js',
                },
                {
                    name: 'TouchDesigner',
                },
                {
                    name: 'Three.js',
                },
            ],
        },
        {
            name: 'Data visualization',
            children: [
                {
                    name: 'D3',
                },
                {
                    name: 'Vega',
                },
                {
                    name: 'ZingChart',
                },
                {
                    name: 'Plotly',
                },
            ],
        },
        {
            name: 'Audio',
            children: [
                {
                    name: 'SuperCollider',
                },
                {
                    name: 'Tone.js',
                },
                {
                    name: 'Sound design',
                },
                {
                    name: 'Ableton Live',
                },
            ],
        },
        {
            name: 'Other',
            children: [
                {
                    name: 'Storytelling with data',
                },
                {
                    name: 'Prototyping and iteration',
                },
                {
                    name: 'Python',
                },
                {
                    name: 'Node.js',
                },
                {
                    name: 'Unity',
                },
            ],
        },
        {
            name: 'Web development',
            children: [
                {
                    name: 'Front-end development',
                },
                {
                    name: 'HTML',
                },
                {
                    name: 'CSS',
                },
                {
                    name: 'JavaScript',
                },
                {
                    name: 'Vue.js',
                },
            ],
        },
    ],
};

const width = 800;
const root = d3.hierarchy(data);
const dx = 25;
const dy = width / (root.height + 1.1);
const tree = d3.tree().nodeSize([dx, dy]);
tree(root);

let x0 = Infinity;
let x1 = -x0;
root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
});

const height = x1 - x0 + dx * 2;

const svg = d3.create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-dy / 3, x0 - dx, width, height])
    .attr('style', 'max-width: 100%; height: auto; font: 1rem sans-serif; font-weight: 300;');

const link = svg.append('g')
    .attr('fill', 'none')
    .attr('stroke', 'var(--bg-color-dark)')
    .attr('stroke-width', 3)
    .attr('stroke-linecap', 'round')
    .selectAll()
    .data(root.links())
    .join('path')
    .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)
    );

const node = svg.append('g')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 3)
    .selectAll()
    .data(root.descendants())
    .join('g')
    .attr('transform', d => `translate(${d.y},${d.x})`);

node.append('text')
    .attr('x', d => d.children ? -5 : 5)
    .attr('text-anchor', d => d.children ? 'end' : 'start')
    .attr('dominant-baseline', 'middle')
    .text(d => d.data.name)
    .attr('stroke', 'white')
    .attr('paint-order', 'stroke');

skills.append(svg.node());
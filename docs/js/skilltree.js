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
    .attr('viewBox', [(-dy / 3) + 40, x0 - dx, width, height])
    .attr('style', 'max-width: 100%; height: auto; font: 1rem sans-serif; font-weight: 300;');

const links = svg.append('g')
    .attr('fill', 'none')
    .attr('stroke', 'var(--bg-color-dark)')
    .attr('stroke-linecap', 'round')
    .selectAll()
    .data(root.links())
    .join('path')
    .attr('stroke-width', d => 9 - d.source.depth * 5)
    .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)
    );

const nodes = svg.append('g')
    .attr('stroke-linecap', 'round')
    .selectAll()
    .data(root.descendants())
    .join('g')
    .attr('transform', d => `translate(${d.y},${d.x})`);

const padding = 30;
const nodeHeight = 30;
const borderWidth = 2;

nodes.filter(d => d.children)
    .append('rect')
    .attr('x', d => {
        const label = d.data.name;
        return -getTextWidth(label) / 2 - padding / 2;
    })
    .attr('y', -(nodeHeight + borderWidth) / 2)
    .attr('width', d => getTextWidth(d.data.name) + padding)
    .attr('height', d => d.parent ? nodeHeight : nodeHeight * 1)
    .attr('fill', d => d.parent
        ? 'color-mix(in hsl, var(--text-bg-color), transparent 20%)'
        : 'var(--bg-color-light)'
    )
    .attr('rx', nodeHeight / 2)
    .attr('ry', nodeHeight / 2)
    .attr('stroke', 'var(--bg-color-dark)')
    .attr('stroke-width', borderWidth);

nodes.append('text')
    .attr('x', d => (d.parent && d.children)
        ? 0
        : (d.children ? 18 : 8)
    )
    .attr('text-anchor', d => (d.parent && d.children)
        ? 'middle'
        : (d.children ? 'end' : 'start')
    )
    .attr('dominant-baseline', 'middle')
    .attr('stroke-width', d => d.parent ? 0 : 2)
    .text(d => d.data.name);

function getTextWidth(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '16px Helvetica';
    return context.measureText(text).width;
}

skills.append(svg.node());
if (document.querySelector('main').classList.contains('project')) {
    const container = document.querySelector('.gallery');
    const viewer = document.createElement('div');
    viewer.classList.add('gallery-viewer');
    viewer.classList.add('hidden');
    viewer.addEventListener('click', () => {
        viewer.classList.add('hidden');
    })
    const viewerImg = document.createElement('img');
    viewer.appendChild(viewerImg);
    document.body.appendChild(viewer);
    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.src === undefined) {
                return;
            }
            viewer.classList.remove('hidden');
            viewerImg.src = event.target.src;
        });
    });
}
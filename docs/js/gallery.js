class Gallery {
    current = null;
    images = [];
    viewer = null;
    viewerImg = null;

    constructor() {
        this.images = Array.from(document.querySelectorAll('.gallery img')).map(el => el.src);
        this.addViewer();
        document.querySelectorAll('.gallery a').forEach((link, i) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                if (event.target.src === undefined) {
                    return;
                }
                this.current = i;
                this.show();
            });
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.hide();
            } else if (event.key === 'ArrowRight') {
                this.next();
            } else if (event.key === 'ArrowLeft') {
                this.prev();
            }
        });
    }

    addViewer() {
        this.viewer = document.createElement('div');
        this.viewer.classList.add('gallery-viewer');
        this.viewer.classList.add('hidden');
        this.viewer.addEventListener('click', () => {
            this.viewer.classList.add('hidden');
        })
        this.viewerImg = document.createElement('img');
        this.viewer.appendChild(this.viewerImg);
        document.body.appendChild(this.viewer);
    }

    next() {
        this.current = Math.min(this.current + 1, this.images.length -1);
        this.show();
    }

    prev() {
        this.current = Math.max(this.current - 1, 0);
        this.show();
    }

    show() {
        this.viewerImg.src = this.images[this.current];
        this.viewer.classList.remove('hidden');
    }

    hide() {
        this.current = null;
        this.viewerImg.src = '';
        this.viewer.classList.add('hidden');
    }
}

if (document.querySelector('main').classList.contains('project')) {
    new Gallery();
}
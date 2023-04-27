document.addEventListener('DOMContentLoaded', () => {
    const activeImage = document.querySelector('.active-image');
    // const closeBtn = document.querySelector('dialog button');
    const thumbnailBtns = document.querySelectorAll('.image-thumbnails > button');

    // activeImage?.addEventListener('click', (e) => {
    //     const [dialog] = document.getElementsByTagName('dialog');
    //     if (e.target instanceof Element) {
    //         const parent = e.target.parentElement?.cloneNode(true);
    //         const figure = closeBtn?.nextElementSibling;
    //         parent && figure ? figure.appendChild(parent) : null;
    //         dialog.show();
    //     }
    // });

    // closeBtn?.addEventListener('click', () => {
    //     if (closeBtn.parentElement instanceof HTMLDialogElement) {
    //         const dialog = closeBtn.parentElement;
    //         const figureBtn = closeBtn.nextElementSibling;

    //         figureBtn?.addEventListener('click', () => {
    //             const image = figureBtn.querySelector('img');
    //             image?.classList.toggle('zoom-in');
    //         })
            
    //         dialog.close();
            
    //         if (figureBtn) {
    //             const figure = figureBtn.querySelector('figure');
    //             figure ? figureBtn.removeChild(figure) : null;
    //         }
    //     }
    // })

    thumbnailBtns.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            setActiveImage(thumbnail);
            setActiveImageClass(thumbnailBtns, thumbnail);
            activeImage ? triggerFadeAnimation(activeImage) : null;
        });
    });
});

export function setActiveImage(thumbnail: Element) {
    const activeImage = document.querySelector('.active-image img');
    const activeImageCaption = document.querySelector('.active-image figcaption');
    const image = thumbnail.querySelector('img');

    const src = image?.getAttribute('src');
    src ? activeImage?.setAttribute('src', src) : null;

    const alt = image?.getAttribute('alt');
    alt ? activeImage?.setAttribute('alt', alt) : null;

    const classes = image?.getAttribute('class');
    classes ? activeImage?.setAttribute('class', classes) : null;

    const caption = image?.getAttribute('data-caption');
    if (caption && activeImageCaption) {
        activeImageCaption.innerHTML = caption;
    }
}

export function setActiveImageClass(thumbnails: NodeListOf<Element>, activeThumbnail: Element) {
    thumbnails.forEach((thumbnail) => {
        const img = thumbnail.querySelector('img');
        img?.classList.remove('active');
    });

    const img = activeThumbnail.querySelector('img');
    img?.classList.add('active');
}

export function triggerFadeAnimation(activeImage: Element) {
    activeImage.classList.remove('fade-in');
    activeImage instanceof HTMLElement ? void activeImage.offsetWidth : null;
    activeImage.classList.add('fade-in');
}
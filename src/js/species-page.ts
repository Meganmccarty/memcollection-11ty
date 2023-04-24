document.addEventListener('DOMContentLoaded', () => {
    const activeImage = document.querySelector('.active-image');
    const thumbnailBtns = document.querySelectorAll('.image-thumbnails > button');

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
    void activeImage.parentElement?.offsetWidth;
    activeImage.classList.add('fade-in');
}
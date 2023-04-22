export function toggleEmptyTaxon(message: Element | HTMLElement, contentToHide: Element | HTMLElement) {
    message.classList.remove('hide');
    contentToHide.classList.add('hide');
}
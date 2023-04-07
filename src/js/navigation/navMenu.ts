export function checkMenu(e: KeyboardEvent | null, elements: HTMLElement[]) {
    // Hide the menu if window is resized greater than mobile
    if (window.innerWidth > 900) {
        elements.forEach((el) => el.classList.remove('show'));
    }

    // Close menu if 'Escape' pressed
    if (elements[0].classList.contains('show') && e?.key === 'Escape') {
        elements.forEach((el) => el.classList.remove('show'));
        document.getElementById('open-menu')?.focus();
    }
}

export function toggleMenu(e: MouseEvent, elements: HTMLElement[], btn: HTMLElement, action: string) {
    // Check if the menu should be shown or hidden
    if (action === 'show') {
        elements.forEach((el) => el.classList.add('show'));
    } else if (action === 'hide') {
        elements.forEach((el) => el.classList.remove('show'));
    }

    // Bring focus to the open or close menu button if keyboard was used
    if (e.detail === 0) {
        btn.focus();
    }
}

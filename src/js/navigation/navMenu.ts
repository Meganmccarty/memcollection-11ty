export function checkMenu(e: KeyboardEvent | null, menu: HTMLElement) {
    // Hide the menu if window is resized greater than mobile
    if (window.innerWidth > 900) {
        menu.classList.remove('show');
    }

    // Close menu if 'Escape' pressed
    if (menu.classList.contains('show') && e?.key === 'Escape') {
        menu.classList.remove('show');
        document.getElementById('open-menu')?.focus();
    }
}

export function toggleMenu(e: MouseEvent, menu: HTMLElement, btn: HTMLElement, action: string) {
    // Check if the menu should be shown or hidden
    if (action === 'show') {
        menu.classList.add('show');
    } else if (action === 'hide') {
        menu.classList.remove('show');
    }

    // Bring focus to the open or close menu button if keyboard was used
    if (e.detail === 0) {
        btn.focus();
    }
}

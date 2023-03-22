import { focusElement, moveTabIndex } from '../utilities/moveTabIndex';

export function toggleDropdown(btn: HTMLElement, dropdown: HTMLElement) {
    // Grab chevron icons on button, and alternate between the 'up' and 'down' icons
    const imgs = btn.querySelectorAll('img');
    imgs.forEach((img) => img.classList.toggle('hide'));

    // Toggle showing/hiding the dropdown
    dropdown.classList.toggle('hide');
}

export function manageDropdownTabIndex(e: KeyboardEvent, dropdown: HTMLElement) {
    const links = dropdown.querySelectorAll('a');
    const pagesBtn = document.getElementById('pages-button');

    // Save any currently focused element
    const anyFocused = dropdown.querySelector('a[tabIndex="0"]');

    switch (e.key) {
        case 'ArrowDown':
            if (anyFocused === null) {
                // If nothing focused, focus first element
                focusElement(links[0]);
            } else {
                // If something is focused, move focus to next element
                moveTabIndex(links, links[links.length - 1], '+');
            }
            break;

        case 'ArrowUp':
            if (anyFocused === null) {
                // If nothing focused, focus last element
                focusElement(links[links.length - 1]);
            } else {
                // If something is focused, move focus to previous element
                moveTabIndex(links, links[0], '-');
            }
            break;

        // If 'Escape' pressed, close the dropdown
        case 'Escape':
            if (pagesBtn) {
                toggleDropdown(pagesBtn, dropdown);
            }
            break;

        default:
            break;
    }

    // Reset tab index to -1 on all elements if dropdown does not contain activeElement
    if (!dropdown.contains(document.activeElement)) {
        links?.forEach((link) => link.setAttribute('tabIndex', '-1'));
    }
}

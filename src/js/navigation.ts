import { trapFocus } from './utilities/trapFocus';
import { manageDropdownTabIndex, toggleDropdown } from './navigation/navDropdown';
import { checkMenu, toggleMenu } from './navigation/navMenu';

export function initializeNavigation() {
    // Save HTML elements to variables
    const closeMenuBtn = document.getElementById('close-menu');
    const menu = document.getElementById('menu');
    const openMenuBtn = document.getElementById('open-menu');
    const overlay = document.getElementById('overlay');
    const pagesBtn = document.getElementById('pages-button');
    const pagesDropdown = document.getElementById('pages-dropdown');

    if (menu && overlay) {
        // Ensure correct menu (desktop or mobile) is shown when page loaded
        checkMenu(null, [menu, overlay]);

        // Add event listeners for closing mobile menu
        document.addEventListener('keyup', (e) => checkMenu(e, [menu, overlay]));
        window.addEventListener('resize', () => checkMenu(null, [menu, overlay]));
    }

    if (closeMenuBtn && menu && openMenuBtn && overlay) {
        // Add event listeners to open/close menu buttons
        closeMenuBtn.addEventListener('click', (e) => toggleMenu(e, [menu, overlay], openMenuBtn, 'hide'));
        openMenuBtn.addEventListener('click', (e) => toggleMenu(e, [menu, overlay], closeMenuBtn, 'show'));

        document.addEventListener('click', (e) => {
            if (e.target === overlay) {
                toggleMenu(e, [menu, overlay], openMenuBtn, 'hide');
            }
        });
    }

    if (pagesDropdown) {
        // Add event listener to pages dropdown button
        pagesBtn?.addEventListener('click', () => toggleDropdown(pagesBtn, pagesDropdown));
    }

    /* Add event listener to trap focus to mobile menu (if open)
       and navigation dropdown links with arrow keys */
    document.addEventListener('keydown', (e) => {
        if (window.innerWidth < 900 && menu?.classList.contains('show')) {
            trapFocus(e, menu);
        }

        if (pagesDropdown && !pagesDropdown?.classList.contains('hide')) {
            manageDropdownTabIndex(e, pagesDropdown);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => initializeNavigation());

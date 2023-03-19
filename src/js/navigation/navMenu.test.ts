/** @jest-environment jsdom */
import { expect } from '@jest/globals';
import { checkMenu, toggleMenu } from './navMenu';

describe('checkMenu()', () => {
    let menu: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = '<div class="show" id="menu">Menu!</div>';
        [menu] = document.getElementsByTagName('div');
        menu.focus();
    });

    it('hides menu if viewport is larger than mobile', () => {
        window.innerWidth = 1000;
        checkMenu(null, menu);
        expect(menu.classList).not.toContain('show');
    });

    it('closes menu if "Escape" pressed', () => {
        const event = new KeyboardEvent('keyup', { key: 'Escape' });
        checkMenu(event, menu);
        expect(menu.classList).not.toContain('show');
    });
});

describe('toggleMenu()', () => {
    let closeMenuBtn: HTMLElement;
    let menu: HTMLElement;
    let openMenuBtn: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id="open-menu">Open Menu</button>
            <button id="close-menu">Close Menu</button>
            <div id="menu">Menu!</div>
        `;

        [openMenuBtn, closeMenuBtn] = document.getElementsByTagName('button');
        [menu] = document.getElementsByTagName('div');
    });

    it('shows menu if "action" = "show"', () => {
        // Open the menu
        const event = new MouseEvent('click');
        toggleMenu(event, menu, closeMenuBtn, 'show');

        // Expect menu to be shown
        expect(menu.classList).toContain('show');
    });

    it('hides menu if "action" = "hide"', () => {
        // Set menu to initially be shown
        menu.classList.add('show');

        // Close the menu
        const event = new MouseEvent('click');
        toggleMenu(event, menu, openMenuBtn, 'hide');

        // Expect menu to be hidden
        expect(menu.classList).not.toContain('show');
    });

    it('moves focus to open/close button if keyboard used', () => {
        // Set menu to initialy be shown, and put focus on close menu button
        menu.classList.add('show');
        closeMenuBtn.focus();

        // Create mouse event that is triggered with "Spacebar"/"Enter" so the menu closes
        const event = new MouseEvent('click', { detail: 0 });
        toggleMenu(event, menu, openMenuBtn, 'hide');

        // Expect focus to be moved to open menu button
        expect(document.activeElement).toBe(openMenuBtn);
    });
});

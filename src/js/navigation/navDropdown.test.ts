/** @jest-environment jsdom */
import { expect } from '@jest/globals';
import { manageDropdownTabIndex, toggleDropdown } from './navDropdown';

describe('manageDropdownTabIndex()', () => {
    let dropdown: HTMLElement;
    let links: HTMLCollectionOf<HTMLAnchorElement>;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id="pages-button">Dropdown button</button>
            <div id="dropdown">
                <a href="/" tabindex="-1">Link 1</a>
                <a href="/" tabindex="-1">Link 2</a>
                <a href="/" tabindex="-1">Link 3</a>
            </div>
        `;
        [dropdown] = document.getElementsByTagName('div');
        links = document.getElementsByTagName('a');
    });

    it('moves focus forward with down arrow key', () => {
        // Create new keybord event for the down arrow key
        const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });

        // Expect focus to move downward
        manageDropdownTabIndex(event, dropdown);
        expect(links[0]).toBe(document.activeElement);

        manageDropdownTabIndex(event, dropdown);
        expect(links[1]).toBe(document.activeElement);
    });

    it('moves focus back when using up arrow key', () => {
        // Create new keyboard event for the up arrow key
        const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

        // Expect focus to move upward
        manageDropdownTabIndex(event, dropdown);
        expect(links[links.length - 1]).toBe(document.activeElement);

        manageDropdownTabIndex(event, dropdown);
        expect(links[1]).toBe(document.activeElement);
    });

    it('wraps focus to start when end reached', () => {
        // Create new keyboard event for the down arrow key
        const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });

        // Put focus on last element
        links[links.length - 1].tabIndex = 0;
        links[links.length - 1].focus();

        // Expect focus to move to first element
        manageDropdownTabIndex(event, dropdown);
        expect(links[0]).toBe(document.activeElement);
    });

    it('wraps focus to end when start reached', () => {
        // Create new keyboard event for the up arrow key
        const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

        // Put focus on first element
        links[0].tabIndex = 0;
        links[0].focus();

        // Expect focus to move to last element
        manageDropdownTabIndex(event, dropdown);
        expect(links[links.length - 1]).toBe(document.activeElement);
    });

    it('closes dropdown if "Escape" key pressed', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' });
        manageDropdownTabIndex(event, dropdown);
        expect(dropdown.classList).toContain('hide');
    });

    it('resets tab index if focus outside of dropdown', () => {
        // Create new keyboard event for the right arrow key
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });

        // Expect tab index of all focusable elements to be reset to -1
        manageDropdownTabIndex(event, dropdown);
        const [link1, link2, link3] = links;
        expect(link1.tabIndex).toBe(-1);
        expect(link2.tabIndex).toBe(-1);
        expect(link3.tabIndex).toBe(-1);
    });
});

describe('toggleDropdown()', () => {
    let btn: HTMLElement;
    let dropdown: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <button>
                <img id="up" class="hide" />
                <img id="down" />
            </button>
            <div class="hide">Dropdown!</div>
        `;
        [btn] = document.getElementsByTagName('button');
        [dropdown] = document.getElementsByTagName('div');
    });

    it('opens/closes the dropdown', () => {
        toggleDropdown(btn, dropdown);
        expect(dropdown.classList).not.toContain('hide');

        toggleDropdown(btn, dropdown);
        expect(dropdown.classList).toContain('hide');
    });

    it('shows appropriate chevron icon', () => {
        const [upChevron, downChevron] = btn.getElementsByTagName('img');
        toggleDropdown(btn, dropdown);
        expect(upChevron.classList).not.toContain('hide');
        expect(downChevron.classList).toContain('hide');

        toggleDropdown(btn, dropdown);
        expect(upChevron.classList).toContain('hide');
        expect(downChevron.classList).not.toContain('hide');
    });
});

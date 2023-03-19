/** @jest-environment jsdom */
import { expect } from '@jest/globals';
import { focusElement, moveTabIndex } from './moveTabIndex';

describe('focusElement()', () => {
    let button: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = '<button>Test</button>';
        [button] = document.getElementsByTagName('button');
    });

    it('sets tab index on element to 0', () => {
        focusElement(button);
        expect(button.tabIndex).toBe(0);
    });

    it('sets focus to element', () => {
        focusElement(button);
        expect(button).toBe(document.activeElement);
    });
});

describe('moveTabIndex()', () => {
    let buttons: NodeListOf<HTMLElement>;

    beforeEach(() => {
        document.body.innerHTML = `
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        `;
        buttons = document.querySelectorAll('button');
        buttons[1].focus();
    });

    it('moves focus forward if direction = +', () => {
        // Move focus from button 2 to button 3
        moveTabIndex(buttons, buttons[buttons.length - 1], '+');
        expect(buttons[2]).toBe(document.activeElement);

        // Wrap focus from button 3 to button 1
        moveTabIndex(buttons, buttons[buttons.length - 1], '+');
        expect(buttons[0]).toBe(document.activeElement);
    });

    it('moves focus backward if direction = -', () => {
        // Move focus from button 2 to button 1
        moveTabIndex(buttons, buttons[0], '-');
        expect(buttons[0]).toBe(document.activeElement);

        // Wrap focus from button 1 to button 3
        moveTabIndex(buttons, buttons[0], '-');
        expect(buttons[2]).toBe(document.activeElement);
    });
});

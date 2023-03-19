/** @jest-environment jsdom */
import { expect } from '@jest/globals';
import { trapFocus } from './trapFocus';

describe('trapFocus()', () => {
    let button1: HTMLButtonElement;
    let button2: HTMLButtonElement;
    let input: HTMLInputElement;
    let menu: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
        <div id="menu">
            <button>Button 1</button>
            <button>Button 2</button>
            <input type="text" />
        </div>`;

        // Save HTML elements to variables
        [button1, button2] = document.getElementsByTagName('button');
        [input] = document.getElementsByTagName('input');
        [menu] = document.getElementsByTagName('div');
    });

    it('does nothing if Tab not pressed', () => {
        // Put focus on middle element
        button2.focus();

        // Don't tab forward or backward
        const event = new KeyboardEvent('keydown', { key: 'f' });
        trapFocus(event, menu);

        // Expect focus not to have moved
        expect(document.activeElement).toBe(button2);
    });

    it('moves focus to start if tabbing forward and last element reached', () => {
        // Put focus on last element
        input.focus();

        // Tab forward
        const event = new KeyboardEvent('keydown', { key: 'Tab' });
        trapFocus(event, menu);

        // Focus should be on first element
        expect(document.activeElement).toBe(button1);
    });

    it('moves focus to end if tabbing backward and first element reached', () => {
        // Put focus on first element
        button1.focus();

        // Shift + Tab backward
        const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
        trapFocus(event, menu);

        // Focus should be on last element
        expect(document.activeElement).toBe(input);
    });
});

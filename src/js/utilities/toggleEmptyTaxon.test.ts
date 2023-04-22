/** @jest-environment jsdom */
import { expect } from '@jest/globals';
import { toggleEmptyTaxon } from './toggleEmptyTaxon';

describe('toggleEmptyTaxon()', () => {
    let message: HTMLElement;
    let taxonElement: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <p class="hide">This taxon has no subtaxa.</p>
            <ul></ul>
        `;

        [message] = document.getElementsByTagName('p');
        [taxonElement] = document.getElementsByTagName('ul');
    });

    it('shows message while hiding empty taxon element', () => {
        toggleEmptyTaxon(message, taxonElement);
        expect(message.classList).not.toContain('hide');
        expect(taxonElement.classList).toContain('hide');
    });
});

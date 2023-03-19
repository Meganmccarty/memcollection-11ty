import 'cypress-axe';
import { terminalLog } from '../support/terminalLog';

describe('navigate menu dropdown', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
        cy.injectAxe();
        cy.get('#pages-button').click();
    });

    it('can be navigated with arrow keys', () => {
        cy.get('#pages-dropdown').trigger('keydown', { key: 'ArrowDown' });
        cy.get('#pages-dropdown li:first > a').should('have.attr', 'tabIndex', 0);
    });

    it('can be closed by pressing "Escape"', () => {
        cy.get('#pages-dropdown').trigger('keydown', { key: 'Escape' });
        cy.get('#pages-dropdown').should('have.class', 'hide');
    });

    it('has no detectable a11y violations', () => {
        cy.checkA11y(undefined, undefined, terminalLog);
    });
});

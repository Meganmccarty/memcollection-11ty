import 'cypress-axe';
import { terminalLog } from '../support/terminalLog';

describe('load page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
        cy.injectAxe();
    });

    it('has no detectable a11y violations on load', () => {
        // Test the page at initial load
        cy.checkA11y(undefined, undefined, terminalLog);
    });
});

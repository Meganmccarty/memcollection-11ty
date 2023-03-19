// Outputs specific a11y violations to terminal in tabular format
export function terminalLog(violations: Array<any>) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`,
    );

    const violationData = violations.map(({
        id, impact, description, nodes,
    }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
    }));

    cy.task('table', violationData);
}

import { toggleEmptyTaxon } from './utilities/toggleEmptyTaxon';

document.addEventListener('DOMContentLoaded', () => {
    const emptyOrder = document.getElementById('empty-taxon');
    const ul = document.querySelector('ul.taxonomy-list');

    if (ul?.children.length === 0 && emptyOrder) {
        toggleEmptyTaxon(emptyOrder, ul);
    }
});

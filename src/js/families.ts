import { toggleEmptyTaxon } from './utilities/toggleEmptyTaxon';

document.addEventListener('DOMContentLoaded', () => {
    const emptyFamily = document.getElementById('empty-family');
    const emptySubfamilies = document.querySelectorAll('p.empty-subfamily');
    const toc = document.querySelector('#toc > ul');

    emptySubfamilies.forEach((subfamily) => {
        if (subfamily.nextElementSibling?.children.length === 0) {
            toggleEmptyTaxon(subfamily, subfamily.nextElementSibling);
        }
    });

    if (toc?.children.length === 0 && emptyFamily && toc.parentElement) {
        toggleEmptyTaxon(emptyFamily, toc.parentElement);
    }
});

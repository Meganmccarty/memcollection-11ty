document.addEventListener('DOMContentLoaded', () => {
    const emptyOrder = document.getElementById('empty-taxon');
    const ul = document.querySelector('ul.taxonomy-list');

    if (ul?.children.length === 0) {
        ul.classList.add('hide');
        emptyOrder?.classList.remove('hide');
    }
});

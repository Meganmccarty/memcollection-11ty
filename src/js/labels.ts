import { addChangeEvent, handleSubmit, resetForm } from './labels/formData';

export function initializeForm() {
    const form = document.getElementById('label-form');
    const clearFormBtn = form?.querySelector('button[type=reset]');
    const inputs = form?.querySelectorAll('input');
    const selects = form?.querySelectorAll('select');

    if (form && clearFormBtn) {
        clearFormBtn.addEventListener('click', () => resetForm());
    }

    if (inputs && selects) {
        [inputs, selects].forEach((array) => addChangeEvent(array));
    }

    form?.addEventListener('submit', (e) => handleSubmit(e));
}

document.addEventListener('DOMContentLoaded', initializeForm);

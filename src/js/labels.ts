import { addChangeEvent, handleSubmit } from './labels/formData';

document.addEventListener('DOMContentLoaded', initializeForm);

export function initializeForm() {
    const form = document.getElementById('label-form');
    const inputs = form?.querySelectorAll('input');
    const selects = form?.querySelectorAll('select');

    if (inputs && selects) {
        [inputs, selects].forEach((array) => {
            addChangeEvent(array);
        });
    }

    form?.addEventListener('submit', (e) => handleSubmit(e));
}
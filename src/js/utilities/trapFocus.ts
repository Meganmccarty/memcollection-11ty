export function trapFocus(e: KeyboardEvent, element: HTMLElement) {
    /* eslint-disable no-multi-str */
    const focusableElements = element.querySelectorAll(
        'a[href]:not([disabled]), \
        button:not([disabled]), \
        textarea:not([disabled]), \
        input[type="text"]:not([disabled]), \
        input[type="radio"]:not([disabled]), \
        input[type="checkbox"]:not([disabled]), \
        select:not([disabled])',
    );

    // Grab first and last focusable elements
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];

    // Check if tab key is pressed, and save to variable
    const isTabPressed = (e.key === 'Tab');

    // If tab isn't pressed, exit out of function
    if (!isTabPressed) {
        return;
    }

    // Check if shift key is pressed or not (to determine focus direction)
    if (isTabPressed && e.shiftKey && document.activeElement === firstFocusableEl) {
        (lastFocusableEl as HTMLElement).focus();
        e.preventDefault();
    } else if (document.activeElement === lastFocusableEl) {
        (firstFocusableEl as HTMLElement).focus();
        e.preventDefault();
    }
}

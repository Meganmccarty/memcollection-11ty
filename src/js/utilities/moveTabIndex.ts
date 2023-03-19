export function focusElement(element: HTMLElement) {
    // Set focus to an element and update its tab index
    element.setAttribute('tabIndex', '0');
    element.focus();
}

export function moveTabIndex(
    nodeList: NodeListOf<HTMLElement>,
    lastEl: HTMLElement,
    direction: string,
) {
    // Get focused element
    const prevFocused = document.activeElement;

    // Find focused element in nodelist
    const prevEl = Array.from(nodeList).find((element) => element === prevFocused);

    if (prevEl) {
        // Get index of focused element and last element
        const prevIndex = Array.from(nodeList).indexOf(prevEl);
        const lastElIndex = Array.from(nodeList).indexOf(lastEl);

        // If last element focused, wrap to start; else, move focus to next element
        if (prevIndex === lastElIndex) {
            if (direction === '+') {
                focusElement(nodeList[0]);
            } else {
                focusElement(nodeList[nodeList.length - 1]);
            }
            lastEl.setAttribute('tabIndex', '-1');
        } else {
            let nextEl;
            if (direction === '+') {
                nextEl = nodeList[prevIndex + 1];
            } else {
                nextEl = nodeList[prevIndex - 1];
            }
            prevEl.setAttribute('tabIndex', '-1');
            focusElement(nextEl);
        }
    }
}

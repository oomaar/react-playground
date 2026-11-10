import { collectFocusableElements } from "./collectFocusableElements";

export function activateFocusTrap(scope: HTMLElement): () => void {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = collectFocusableElements(scope);

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1)!;

    const currentElement = document.activeElement;

    if (!(currentElement instanceof HTMLElement)) {
      return;
    }

    // Focus escaped the scope
    if (!scope.contains(currentElement)) {
      event.preventDefault();

      if (event.shiftKey) {
        lastElement.focus();
      } else {
        firstElement.focus();
      }

      return;
    }

    // Shift + Tab on first element
    if (event.shiftKey && currentElement === firstElement) {
      event.preventDefault();
      lastElement.focus();

      return;
    }

    // Tab on last element
    if (!event.shiftKey && currentElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}

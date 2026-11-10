import { collectScrollableElements } from "./collectScrollableElements";

export function activateScrollLock(scope: HTMLElement): () => void {
  const scrollableElements = collectScrollableElements(scope);

  // Store original styles to prevent permanent layout breakdown
  const originalStyles = new Map<
    HTMLElement,
    { overflow: string; paddingRight: string }
  >();

  for (const element of scrollableElements) {
    // 1. Back up current values
    originalStyles.set(element, {
      overflow: element.style.overflow,
      paddingRight: element.style.paddingRight,
    });

    // 2. Calculate the exact scrollbar width of this specific custom element
    const scrollbarWidth =
      element.offsetWidth -
      element.clientWidth -
      (parseInt(window.getComputedStyle(element).borderLeftWidth) || 0) -
      (parseInt(window.getComputedStyle(element).borderRightWidth) || 0);

    // 3. Add the scrollbar width to any existing right padding
    const currentPadding =
      parseInt(window.getComputedStyle(element).paddingRight) || 0;
    element.style.paddingRight = `${currentPadding + scrollbarWidth}px`;

    // 4. Lock the scrollbar
    element.style.overflow = "hidden";
  }

  // Return the cleanup function
  return () => {
    for (const [element, original] of originalStyles) {
      element.style.overflow = original.overflow;
      element.style.paddingRight = original.paddingRight;
    }
  };
}

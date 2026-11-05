export function collectScrollableElements(scope: HTMLElement): HTMLElement[] {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("*"));

  return elements.filter((element) => {
    if (scope.contains(element)) {
      return false;
    }

    const style = getComputedStyle(element);

    return (
      style.overflow === "auto" ||
      style.overflow === "scroll" ||
      style.overflowX === "auto" ||
      style.overflowX === "scroll" ||
      style.overflowY === "auto" ||
      style.overflowY === "scroll"
    );
  });
}

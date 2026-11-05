export function collectFocusableElements(scope: HTMLElement): HTMLElement[] {
  const elements = scope.querySelectorAll<HTMLElement>(
    `
            button,
            a[href],
            input,
            select,
            textarea,
            [tabindex]:not([tabindex="-1"])
        `,
  );

  return [...elements].filter((element) => {
    return !element.hasAttribute("disabled");
  });
}

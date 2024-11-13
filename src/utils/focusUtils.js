const getFocusableElements = (element) =>
  element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

const focusFirstElement = (element) => {
  const focusableElements = getFocusableElements(element);
  if (focusableElements.length < 1) return;

  focusableElements[0].focus();
};

const resetPageFocus = () => {
  const focusableElements = getFocusableElements(document.body);
  if (focusableElements.length < 1) return;

  const element = focusableElements[0];

  element.focus();
  element.blur();
};

export { getFocusableElements, focusFirstElement, resetPageFocus };

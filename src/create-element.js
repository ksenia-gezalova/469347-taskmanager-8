export const createElement = (template) => {
  const newElement = document.createRange().createContextualFragment(template);
  return newElement;
};

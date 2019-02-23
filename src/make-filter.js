// create element for one filter
const getFilterElement = (filter) => {
  return document.createRange().createContextualFragment(`
    <input
    type="radio"
    id="filter__${filter.caption.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    ${filter.isDisabled ? `disabled` : ``}
    ${filter.isChecked ? ` checked` : ``}
    />
    <label for="filter__${filter.caption.toLowerCase()}" class="filter__label"
      >${filter.caption.toUpperCase()} <span class="filter__${filter.caption.toLowerCase()}-count">${
  filter.amount
}</span></label
    >
  `);
};

export default getFilterElement;

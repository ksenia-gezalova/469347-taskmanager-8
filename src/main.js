"use strict";

const filtersContainer = document.querySelector(`.main__filter`);
const cardsContainer = document.querySelector(`.board__tasks`);

const filters = [
  {
    caption: `All`,
    amount: `15`,
    isChecked: true
  },
  {
    caption: `overdue`,
    amount: `0`,
    isDisabled: true
  },
  {
    caption: `today`,
    amount: `0`,
    isDisabled: true
  },
  {
    caption: `favorites`,
    amount: `8`
  },
  {
    caption: `repeating`,
    amount: `2`
  },
  {
    caption: `tags`,
    amount: `6`
  },
  {
    caption: `archive`,
    amount: `115`
  }
];

const cards = [
  {
    isEdit: true,
    color: `black`,
    type: `repeat`,
    tags: [`repeat`, `cinema`, `entertaiment`],
    photoUrl: `img/sample-img.jpg`,
    date: `23 September`,
    time: `11:15 PM`
  },
  {
    color: `blue`,
    type: `deadline`,
    tags: [`repeat`, `cinema`, `entertaiment`],
    photoUrl: `img/sample-img.jpg`,
    date: `23 September`,
    time: `11:15 PM`
  },
  {
    color: `pink`,
    type: `repeat`,
    tags: [`repeat`, `cinema`, `entertaiment`]
  },
  {
    color: `black`,
    type: `repeat`,
    tags: [`entertaiment`],
    photoUrl: `img/sample-img.jpg`
  },
  {
    color: `blue`,
    type: `repeat`,
    tags: [`cinema`, `entertaiment`],
    photoUrl: `img/sample-img.jpg`
  },
  {
    color: `yellow`,
    type: `repeat`,
    tags: [`repeat`, `cinema`, `entertaiment`],
    photoUrl: `img/sample-img.jpg`,
    date: `23 September`,
    time: `11:15 PM`
  },
  {
    color: `blue`,
    type: `repeat`,
    tags: [`repeat`]
  }
];

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

// render filters
filters.forEach((filter) => {
  filtersContainer.appendChild(getFilterElement(filter));
});

// create element for one card
const getCardElement = (card) => {
  const cardElement = document.createRange().createContextualFragment(
      `<article class="card ${
        card.isEdit ? `card--edit` : ``
      } card--${card.color.toLowerCase()} card--${card.type.toLowerCase()}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >
Here is a card with filled data</textarea
            >
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">yes</span>
              </button>

              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                ${
  card.date
    ? `<input
                    class="card__date"
                    type="text"
                    placeholder="${card.date}"
                    name="date"
                    value="${card.date}"
                  />`
    : ``
}

                </label>
                <label class="card__input-deadline-wrap">
                ${
  card.time
    ? `<input
                    class="card__time"
                    type="text"
                    placeholder="${card.time}"
                    name="time"
                    value="${card.time}"
                  />`
    : ``
}

                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">yes</span>
              </button>

              <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-4"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-4"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-4"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-4"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-4"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-4"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-4"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-4"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-4"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-4"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-4"
                  />
                  <label class="card__repeat-day" for="repeat-sa-4"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-4"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-4"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">

              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <label class="card__img-wrap">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            ${
  card.photoUrl
    ? `<img
              src="${card.photoUrl.toLowerCase()}"
              alt="task picture"
              class="card__img"
            />`
    : ``
}

          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-4"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-4"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-4"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
                checked
              />
              <label
                for="color-yellow-4"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-4"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-4"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-4"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-4"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-4"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-4"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>
    `
  );
  // create and render tag in card
  card.tags.forEach((tag) => {
    const tagElement = document.createRange().createContextualFragment(`
    <span class="card__hashtag-inner">
      <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input"/>
      <button type="button" class="card__hashtag-name">
        #${tag}
      </button>
      <button type="button" class="card__hashtag-delete">
        delete
      </button>
    </span>`);
    cardElement.querySelector(`.card__hashtag-list`).appendChild(tagElement);
  });
  return cardElement;
};

// render cards
cards.forEach((card) => {
  cardsContainer.appendChild(getCardElement(card));
});

// remove items
const removeItems = () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
};

// MathRandom
const getRandomValue = function (min, max) {
  const random = min + Math.random() * (max - min);
  return Math.floor(random);
};

// listener for all filters
filtersContainer.addEventListener(`change`, (evt) => {
  if (evt.target.classList.contains(`filter__input`)) {
    removeItems();
    cards.slice(getRandomValue(1, cards.length)).forEach((card) => {
      cardsContainer.appendChild(getCardElement(card));
    });
  }
});

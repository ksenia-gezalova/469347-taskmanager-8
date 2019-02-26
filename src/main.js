import getFilterElement from './make-filter.js';
import getCardElement from './make-task.js';

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

// render filters
filters.forEach((filter) => {
  filtersContainer.appendChild(getFilterElement(filter));
});

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

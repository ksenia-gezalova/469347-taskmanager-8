import getFilterElement from './make-filter.js';
import getCardElement from './make-task.js';

const CARDS_AMOUNT = 7;
const HASHTAGS = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `js`,
  `lecture`
];

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

const card =
  {
    title: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`
    ][Math.floor(Math.random() * 3)],
    dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    tags: new Set(HASHTAGS.sort(() => (Math.random() - 0.5)).slice(0, Math.floor(Math.random() * 3))),
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    color: [
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`][Math.floor(Math.random() * 5)],
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': Math.random() >= 0.5, // random boolean
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    isFavorite: Math.random() >= 0.5,
    isDone: Math.random() >= 0.5,
    isEdit: false
  };


// create array of items
const createItems = (item, amount) => {
  return new Array(amount).fill(item);
};

// create array of cards
const cards = createItems(card, CARDS_AMOUNT);

// render filters
filters.forEach((filter) => {
  filtersContainer.appendChild(getFilterElement(filter));
});

// render cards
cards.forEach((element) => {
  cardsContainer.appendChild(getCardElement(element));
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
    cards.slice(getRandomValue(1, cards.length)).forEach((element) => {
      cardsContainer.appendChild(getCardElement(element));
    });
  }
});

import getFilterElement from './make-filter.js';

import {
  createCard
} from './data.js';
import {
  Task
} from './task';
import {
  TaskEdit
} from './task-edit';

const TASKS_AMOUNT = 7;

const filtersContainer = document.querySelector(`.main__filter`);
const cardsContainer = document.querySelector(`.board__tasks`);
const taskComponent = new Task(createCard());
const editTaskComponent = new TaskEdit(createCard());

const filters = [{
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


// create array of items
const createItems = (item, amount) => {
  return new Array(amount).fill(item);
};

// create array of cards
const cards = createItems(taskComponent, TASKS_AMOUNT);

// render filters
filters.forEach((filter) => {
  filtersContainer.appendChild(getFilterElement(filter));
});

// render cards
cards.forEach((task) => {
  cardsContainer.appendChild(task.render());
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
      cardsContainer.appendChild(element.render());
    });
  }
});

taskComponent.onEdit = () => {
  editTaskComponent.render();
  cardsContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  cardsContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};

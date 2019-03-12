const HASHTAGS = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `js`,
  `lecture`
];

export const createCard = () => {
  return {
    title: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`
    ][Math.floor(Math.random() * 3)],
    dueDate: Date.now() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    tags: new Set(HASHTAGS.sort(() => (Math.random() - 0.5)).slice(0, Math.floor(Math.random() * 3))),
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    color: [
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`
    ][Math.floor(Math.random() * 5)],
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
};

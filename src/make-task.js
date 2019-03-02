// format date
const getFormattedDate = (milliseconds) => {
  const date = new Date(milliseconds);
  return `${date.toLocaleString(`en-US`, {day: `2-digit`})} ${date.toLocaleString(`en-US`, {month: `long`})}`;
};

// format time
const getFormattedTime = (milliseconds) => `${(new Date(milliseconds)).toLocaleString(`en-US`, {hour12: true, hour: `2-digit`, minute: `2-digit`})}`;

// create element for one card
const getCardElement = (card) => {
  const cardElement = document.createRange().createContextualFragment(
      `<article class="card 
      ${card.isEdit ? `card--edit` : ``} 
      card--${card.color.toLowerCase()} 
      ${Object.values(card.repeatingDays).includes(true) ? `card--repeat` : `` }
      ">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive ${!card.isDone ? `` : ` card__btn--disabled`}">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${card.isFavorite ? `` : ` card__btn--disabled`}"
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
                ${card.dueDate ? `<input
                    class="card__date"
                    type="text"
                    placeholder="${getFormattedDate(card.dueDate)}"
                    name="date"
                    value=""${getFormattedDate(card.dueDate)}"
                  />` : ``
}

                </label>
                <label class="card__input-deadline-wrap">
                ${card.dueDate ? `<input
                    class="card__time"
                    type="text"
                    placeholder="${getFormattedTime(card.dueDate)}"
                    name="time"
                    value="${getFormattedTime(card.dueDate)}"
                  />` : ``}

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
            ${card.picture ? `<img
              src="${card.picture.toLowerCase()}"
              alt="task picture"
              class="card__img"
            />` : ``}

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

export default getCardElement;

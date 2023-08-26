import build from "../../../../componentBuilder";

/**
 * @param {String} id - Sorting option id
 * @param {String} label - Sorting option label
 * @param {Boolean} isDisplayed - Sorting option isDisplayed
 * @returns {HTMLElement} - SortingOption component
 * @description - Renders SortingOption component
 **/
const SortingOption = ({ id, label, isDisplayed = true }) => {
  return build(
    "button",
    {
      class: "media-sorter__container__select__option button",
      id,
      "data-isDisplayed": JSON.stringify(isDisplayed),
    },
    [
      build(
        "span",
        { class: "media-sorter__container__select__button__text" },
        [label]
      ),
    ]
  );
};

export default SortingOption;

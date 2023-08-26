import build from "../../../../componentBuilder";
import SortingOption from "./SortingOption";

/**
 * @param {Array} sortingOptions - Sorting options
 * @returns {HTMLElement} - SortingListOptions component
 * @description - Renders SortingListOptions component
 **/
const SortingListOptions = ({ sortingOptions }) => {
  const optionsComponents = [];

  sortingOptions.forEach((option) => {
    optionsComponents.push(SortingOption(option));
  });

  return build(
    "div",
    {
      class: "media-sorter__container__select__options__container",
      "data-open": JSON.stringify(false),
      role: "listbox",
      "aria-labelledby": "sortByLabel",
      "aria-activedescendant": "popularitySorting",
    },
    optionsComponents
  );
};

export default SortingListOptions;

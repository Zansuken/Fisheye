import build from "../../../../componentBuilder";

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

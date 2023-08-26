import build from "../../../../componentBuilder";

/**
 * @param {String} defaultLabel - Default label
 * @returns {HTMLElement} - OpenSortingOptionsButton component
 * @description - Renders OpenSortingOptionsButton component
 **/
const OpenSortingOptionsButton = ({ defaultLabel }) => {
  return build(
    "button",
    {
      class: "media-sorter__container__select__openButton",
      "data-open": JSON.stringify(false),
      role: "button",
    },
    [
      build(
        "span",
        { class: "media-sorter__container__select__button__text" },
        [defaultLabel]
      ),
      build(
        "img",
        {
          class: "media-sorter__container__select__button__icon",
          src: "/images/arrow.svg",
          alt: "Arrow icon",
          "data-open": JSON.stringify(false),
        },
        []
      ),
    ]
  );
};

export default OpenSortingOptionsButton;

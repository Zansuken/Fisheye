import build from "../../../componentBuilder";

/**
 * @returns {HTMLElement} - MediaSorterLabel component
 * @description - Renders MediaSorterLabel component
 **/
const MediaSorterLabel = () => {
  return build("div", null, [
    build(
      "span",
      {
        class: "media-sorter__container__title__text",
        id: "sortByLabel",
        "aria-label": "media sorter",
      },
      ["Trier par"]
    ),
  ]);
};

export default MediaSorterLabel;

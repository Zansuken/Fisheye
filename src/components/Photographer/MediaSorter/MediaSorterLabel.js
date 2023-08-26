import build from "../../../componentBuilder";

/**
 * @returns {HTMLElement} - MediaSorterLabel component
 * @description - Renders MediaSorterLabel component
 **/
const MediaSorterLabel = () => {
  return build("div", null, [
    build(
      "label",
      {
        class: "media-sorter__container__title__text",
        id: "sortByLabel",
        title: "Trier par",
      },
      ["Trier par"]
    ),
  ]);
};

export default MediaSorterLabel;

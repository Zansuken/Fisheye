import build from "../../../componentBuilder";
import MediaSorterLabel from "./MediaSorterLabel";
import OpenSortingOptionsButton from "./MediaSorterOptions/OpenSortingOptionsButton";
import SortingListOptions from "./MediaSorterOptions";
import { observer } from "./observer";

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});

/**
 * @returns {HTMLElement} - MediaSorter component
 * @description - Renders MediaSorter component
 **/
const MediaSorter = () => {
  const sortingOptions = [
    { id: "dateSorting", label: "Date" },
    { id: "titleSorting", label: "Titre" },
  ];

  return build("div", { class: "media-sorter" }, [
    build("div", { class: "media-sorter__container" }, [
      MediaSorterLabel(),
      build(
        "div",
        {
          class: "media-sorter__container__select__button",
          "data-selected": "popularity",
          "aria-haspopup": "listbox",
          "aria-expanded": "false",
          role: "listbox",
        },
        [
          OpenSortingOptionsButton({ defaultLabel: "Popularité" }),
          SortingListOptions({ sortingOptions }),
        ]
      ),
    ]),
  ]);
};

export default MediaSorter;

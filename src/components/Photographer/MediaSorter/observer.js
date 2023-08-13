import { media, videoUrl } from "..";
import SortingOption from "./MediaSorterOptions/SortingOption";
import { renderContent, sortMedia } from "./helpers";

export const observer = new MutationObserver(() => {
  observer.disconnect();

  // Selectors
  const photographerContent = document.querySelector("#photographerContent");
  const popularityButton = document.querySelector("#popularitySorting");
  const dateButton = document.querySelector("#dateSorting");
  const titleButton = document.querySelector("#titleSorting");
  const container = document.querySelector(
    ".media-sorter__container__select__button"
  );
  const openSelectButton = document.querySelector(
    ".media-sorter__container__select__openButton"
  );
  const selectedLabel = document.querySelector(
    ".media-sorter__container__select__button__text"
  );
  const arrowIcon = document.querySelector(
    ".media-sorter__container__select__button__icon"
  );
  const optionsContainer = document.querySelector(
    ".media-sorter__container__select__options__container"
  );

  // Variables
  const formattedMedia = media.map((media) => {
    const updatedMedia = media;

    if (media.video) {
      updatedMedia.type = "video";
      updatedMedia.url = videoUrl;
    } else {
      updatedMedia.type = "image";
    }
    return updatedMedia;
  });

  let currentSort = "popularity";

  const buttons = {
    popularity: {
      element: popularityButton,
      label: "Popularité",
    },
    date: { element: dateButton, label: "Date" },
    title: {
      element: titleButton,
      label: "Titre",
    },
  };

  // Functions
  const setIsOpen = (elements, value) =>
    elements.forEach((element) => element.setAttribute("data-open", value));

  const setDataSelectedAttribute = (element, value) => {
    const { label } = buttons[value];
    element.setAttribute("data-selected", value);
    selectedLabel.textContent = label;
    setIsOpen(
      [arrowIcon, optionsContainer, container, openSelectButton],
      "false"
    );

    Object.entries(buttons).forEach(([key, { element }]) => {
      if (key === "popularity" && !element) {
        optionsContainer.appendChild(
          SortingOption({
            id: "popularitySorting",
            label: "Popularité",
            isDisplayed: true,
          })
        );
        return;
      }
      if (key === value) {
        element.remove();
      } else {
        optionsContainer.appendChild(element);
      }
    });

    renderContent(photographerContent, sortMedia(formattedMedia, value));
  };

  // Events
  document.addEventListener("click", (e) => {
    const target = e.target.closest("#popularitySorting");

    if (target) {
      currentSort = "popularity";
      setDataSelectedAttribute(container, currentSort);
    }
  });

  dateButton?.addEventListener("click", () => {
    currentSort = "date";
    setDataSelectedAttribute(container, currentSort);
  });

  titleButton?.addEventListener("click", () => {
    currentSort = "title";
    setDataSelectedAttribute(container, currentSort);
  });

  openSelectButton.addEventListener("click", () => {
    const isOpen = JSON.parse(openSelectButton.getAttribute("data-open"));
    setIsOpen(
      [arrowIcon, openSelectButton, optionsContainer, container],
      JSON.stringify(!isOpen)
    );
    container.setAttribute("aria-expanded", JSON.stringify(!isOpen));
  });

  // Initial render
  renderContent(photographerContent, sortMedia(formattedMedia, "popularity"));
});

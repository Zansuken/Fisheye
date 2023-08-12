import { media, videoUrl } from "..";
import build from "../../../componentBuilder";
import Content from "../Content";

const renderContent = (container, media) => {
  const renderedElement = document.querySelector("#mediaContainer");
  console.log("test");
  if (renderedElement) {
    renderedElement.remove();
  }
  container.appendChild(Content({ media }));
};

const sortMedia = (media, sort) => {
  switch (sort) {
    case "popularity":
      return media.sort((a, b) => b.likes - a.likes);
    case "date":
      return media.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "title":
      return media.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return media;
  }
};

const classNames = []; // Array to hold the classNames
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Recursive function to get the classNames of all nested elements
          // eslint-disable-next-line no-inner-declarations
          function getClassNames(element) {
            if (element.className) {
              classNames.push(element.className);
            }
            const children = element.children;
            for (let i = 0; i < children.length; i++) {
              getClassNames(children[i]);
            }
          }
          getClassNames(node);
        }
      });
    }
  }

  observer.disconnect();

  if (classNames.includes("media-sorter__container__select__openButton")) {
    const photographerContent = document.querySelector("#photographerContent");

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

    const popularityButton = document.querySelector("#popularitySorting");
    const dateButton = document.querySelector("#dateSorting");
    const titleButton = document.querySelector("#titleSorting");

    const buttons = {
      popularity: { element: popularityButton, label: "Popularité" },
      date: { element: dateButton, label: "Date" },
      title: { element: titleButton, label: "Titre" },
    };

    const setIsOpen = (elements, value) =>
      elements.forEach((element) => element.setAttribute("data-open", value));

    const setDataSelectedAttribute = (element, value) => {
      element.setAttribute("data-selected", value);
      selectedLabel.textContent = buttons[value].label;
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
    });

    console.log(formattedMedia);

    renderContent(photographerContent, sortMedia(formattedMedia, "popularity"));
  }
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});

const SortingOption = ({ id, label, isDisplayed }) => {
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

const MediaSorter = () => {
  return build("div", { class: "media-sorter" }, [
    build("div", { class: "media-sorter__container" }, [
      build("div", { class: "media-sorter__container__title" }, [
        build("label", { class: "media-sorter__container__title__text" }, [
          "Trier par",
        ]),
      ]),
      build(
        "div",
        {
          class: "media-sorter__container__select__button",
          "data-selected": "popularity",
        },
        [
          build(
            "div",
            {
              class: "media-sorter__container__select__openButton",
              "data-open": JSON.stringify(false),
            },
            [
              build(
                "span",
                { class: "media-sorter__container__select__button__text" },
                ["Popularité"]
              ),
              build(
                "img",
                {
                  class: "media-sorter__container__select__button__icon",
                  src: "/public/images/arrow.svg",
                  alt: "Arrow icon",
                  "data-open": JSON.stringify(false),
                },
                []
              ),
            ]
          ),
          build(
            "div",
            {
              class: "media-sorter__container__select__options__container",
              "data-open": JSON.stringify(false),
            },
            [
              SortingOption({
                id: "dateSorting",
                label: "Date",
                isDisplayed: true,
              }),
              SortingOption({
                id: "titleSorting",
                label: "Titre",
                isDisplayed: true,
              }),
            ]
          ),
        ]
      ),
    ]),
  ]);
};

export default MediaSorter;

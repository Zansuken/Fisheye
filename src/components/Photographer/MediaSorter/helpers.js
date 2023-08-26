import Content from "../Content";

/**
 * @param {HTMLElement} container
 * @param {Array} media
 * @returns {void}
 * @description - Renders Content component
 */
export const renderContent = (container, media) => {
  const renderedElement = document.querySelector("#mediaContainer");
  if (renderedElement) {
    renderedElement.remove();
  }
  container.appendChild(Content({ media }));
};

/**
 * @param {Array} media
 * @param {String} sort
 * @returns {Array} - Sorted array of media objects
 * @description - Sorts array of media objects based on sort parameter
 */
export const sortMedia = (media, sort) => {
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

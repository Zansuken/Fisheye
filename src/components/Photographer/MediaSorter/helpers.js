import Content from "../Content";

export const renderContent = (container, media) => {
  const renderedElement = document.querySelector("#mediaContainer");
  if (renderedElement) {
    renderedElement.remove();
  }
  container.appendChild(Content({ media }));
};

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

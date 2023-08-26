import build from "../../../componentBuilder";
import Carousel from "./Carousel";
import MediaCard from "./MediaCard";

let focusedMedia;

/**
 * @param {Array} media - Photographer media
 * @param {Object} focusedMedia - Focused media
 * @description - Renders carousel
 */
export const renderCarousel = (media, focusedMedia) => {
  // Remove existing carousel
  const existingCarousel = document.querySelector(".carousel");
  if (existingCarousel) {
    existingCarousel.remove();
  }

  document.body.appendChild(Carousel({ media, focusedMedia }));
  document.querySelector("#app").classList.add("dialog-open");
};

/**
 * @param {Array} media - Photographer media
 * @returns {HTMLElement} - Content component
 * @description - Renders Content component
 **/
const Content = ({ media }) => {
  const mediaComponents = [];

  const onMediaClick = (event) => {
    renderCarousel(media, focusedMedia);
    const targetId = event.target.getAttribute("data-id");
    const items = document.querySelectorAll(
      ".carousel__container__media__element"
    );

    items.forEach((item) => {
      if (item.getAttribute("data-id") === targetId) {
        item.setAttribute("data-focused", "true");
        focusedMedia = media.find(
          (mediaItem) => JSON.stringify(mediaItem.id) === targetId
        );
        renderCarousel(media, focusedMedia);
        return;
      }
    });
  };

  media.forEach((mediaItem) =>
    mediaComponents.push(
      build(
        "a",
        {
          class: "content__media__container",
          onClick: (event) => onMediaClick(event),
        },
        [MediaCard({ media: mediaItem })]
      )
    )
  );

  return build(
    "div",
    { class: "content", id: "mediaContainer" },
    mediaComponents
  );
};

export default Content;

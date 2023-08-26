import build from "../../../../componentBuilder";
import MediaDescription from "./MediaDescription";

/**
 * @param {Object} media - Media object
 * @param {String} media.type - Media type
 * @param {String} media.id - Media id
 * @returns {HTMLElement} - MediaCard component
 * @description - Renders MediaCard component
 **/
const MediaCard = ({ media, media: { type, id } }) => {
  if (type === "image") {
    const {
      image: src,
      title,
      likes,
      usersLiked,
    } = media || { usersLiked: [] };

    return build("div", { class: "content__media", tabindex: "0", title }, [
      build("div", { class: "content__media__thumbnail-container" }, [
        build("img", {
          class: "content__media__thumbnail",
          src,
          alt: title,
          "data-id": id,
        }),
      ]),
      MediaDescription({ title, likesCount: likes, usersLiked }),
    ]);
  }

  if (type === "video") {
    const { title, likes, url, usersLiked } = media || { usersLiked: [] };

    return build("div", { class: "content__media", tabindex: "0", title }, [
      build("div", { class: "content__media__thumbnail-container" }, [
        build(
          "video",
          {
            class: "content__media__thumbnail",
            src: url,
            alt: title,
            "data-id": id,
          },
          [build("source", { src: url, type: "video/mp4", "data-id": id })]
        ),
      ]),
      MediaDescription({ title, likesCount: likes, usersLiked }),
    ]);
  }
};

export default MediaCard;

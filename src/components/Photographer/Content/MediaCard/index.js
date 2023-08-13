import build from "../../../../componentBuilder";
import MediaDescription from "./MediaDescription";

const MediaCard = ({ media, media: { type, id } }) => {
  if (type === "image") {
    const { image: src, title, likes } = media;

    return build("div", { class: "content__media", tabindex: "0", title }, [
      build("div", { class: "content__media__thumbnail-container" }, [
        build("img", {
          class: "content__media__thumbnail",
          src,
          alt: title,
          "data-id": id,
        }),
      ]),
      MediaDescription({ title, likesCount: likes }),
    ]);
  }

  if (type === "video") {
    const { title, likes, url } = media;

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
      MediaDescription({ title, likesCount: likes }),
    ]);
  }
};

export default MediaCard;

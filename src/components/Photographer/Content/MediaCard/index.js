import build from "../../../../componentBuilder";
import MediaDescription from "./MediaDescription";

const MediaCard = ({ media, media: { type } }) => {
  if (type === "image") {
    const { image: src, title, likes } = media;

    return build("div", { class: "content__media" }, [
      build("img", { class: "content__media__img", src, alt: title }),
      MediaDescription({ title, likesCount: likes }),
    ]);
  }

  if (type === "video") {
    const { title, likes, url } = media;

    return build("div", { class: "content__media" }, [
      build(
        "video",
        {
          class: "content__media__img",
          src: url,
          alt: title,
          controls: true,
        },
        [build("source", { src: url, type: "video/mp4" })]
      ),
      MediaDescription({ title, likesCount: likes }),
    ]);
  }
};

export default MediaCard;

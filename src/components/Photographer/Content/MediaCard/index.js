import build from "../../../../componentBuilder";
import MediaDescription from "./MediaDescription";

const MediaCard = ({ image, video }) => {
  if (image) {
    const { image: src, title, likes } = image;

    return build("div", { class: "content__media" }, [
      build("img", { class: "content__media__img", src, alt: title }),
      MediaDescription({ title, likesCount: likes }),
    ]);
  }

  if (video) {
    const { title, likes, url } = video;

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

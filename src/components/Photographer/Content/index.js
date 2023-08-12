import build from "../../../componentBuilder";
import MediaCard from "./MediaCard";

const Content = ({ media }) => {
  const mediaComponents = [];

  media.forEach((media) =>
    mediaComponents.push(
      build("div", { class: "content__media__container" }, [
        MediaCard({ media }),
      ])
    )
  );

  return build(
    "div",
    { class: "content", id: "mediaContainer" },
    mediaComponents
  );
};

export default Content;

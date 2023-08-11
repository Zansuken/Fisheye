import build from "../../../componentBuilder";
import MediaCard from "./MediaCard";

const Content = ({ images, videos }) => {
  const mediaComponents = [];

  videos.forEach((video) => {
    mediaComponents.push(
      build("div", { class: "content__media__container" }, [
        MediaCard({ video }),
      ])
    );
  });

  images.forEach((image) => {
    mediaComponents.push(
      build("div", { class: "content__media__container" }, [
        MediaCard({ image }),
      ])
    );
  });

  return build("div", { class: "content" }, mediaComponents);
};

export default Content;

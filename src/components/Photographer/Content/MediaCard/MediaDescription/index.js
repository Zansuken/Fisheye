import build from "../../../../../componentBuilder";

const MediaDescription = ({ title, likesCount }) => {
  return build("div", { class: "content__media__description" }, [
    build("h3", { class: "content__media__description__title" }, title),
    build("div", { class: "content__media__description__likes" }, [
      build("span", { class: "content__media__description__likes__count" }, [
        `${likesCount} `,
      ]),
      build("img", {
        class: "content__media__description__likes__icon",
        src: "/images/heart.svg",
        alt: "heart icon",
      }),
    ]),
  ]);
};

export default MediaDescription;

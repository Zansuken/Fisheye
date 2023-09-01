import build from "../../../../../componentBuilder";
import { classNames } from "../../../../../helpers/common";
import { getLocalStorage } from "../../../../../helpers/localstorage";

/**
 * @param {String} title - Media title
 * @param {Number} likesCount - Media likes count
 * @param {Array} usersLiked - Media users liked
 * @returns {HTMLElement} - MediaDescription component
 * @description - Renders MediaDescription component
 **/
const MediaDescription = ({ title, likesCount, usersLiked }) => {
  const sessionId = getLocalStorage("sessionId");
  const isLikedByCurrentUser = usersLiked?.includes(sessionId);

  return build("div", { class: "content__media__description" }, [
    build("h3", { class: "content__media__description__title" }, title),
    build(
      "div",
      {
        class: classNames([
          { name: "content__media__description__likes", isActive: true },
          {
            name: "carousel__container__media__description__likes--liked",
            isActive: isLikedByCurrentUser,
          },
        ]),
      },
      [
        build("span", { class: "content__media__description__likes__count" }, [
          `${likesCount} `,
        ]),
        build("img", {
          class: "content__media__description__likes__icon",
          src: "/images/heart.svg",
          alt: "J'aime",
        }),
      ]
    ),
  ]);
};

export default MediaDescription;

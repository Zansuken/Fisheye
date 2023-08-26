import build from "../../../componentBuilder";

/**
 * @param {Number} totalLikesCount - Total likes count
 * @description - Updates total likes count
 * @returns {void}
 **/
export const updateTotalLikesCount = (totalLikesCount) => {
  const likesCount = document.querySelector(
    ".price-and-likes__container__likes__counter"
  );
  likesCount.innerText = totalLikesCount;
};

/**
 * @param {Number} price - Photographer price
 * @param {Number} totalLikesCount - Total likes count
 * @returns {HTMLElement} - PriceAndLikes component
 * @description - Renders PriceAndLikes component
 **/
const PriceAndLikes = ({ totalLikesCount, price }) => {
  return build("div", { class: "price-and-likes__container" }, [
    build("div", { class: "price-and-likes__container__likes" }, [
      build("span", { class: "price-and-likes__container__likes__counter" }, [
        `${totalLikesCount}`,
      ]),
      build("img", {
        class: "price-and-likes__container__likes__icon",
        src: "/images/heart.svg",
        alt: "heart icon",
      }),
    ]),
    build("div", { class: "price-and-likes__container__price" }, [
      build("span", { class: "price-and-likes__container__price__value" }, [
        `${price}€ / jour`,
      ]),
    ]),
  ]);
};

export default PriceAndLikes;

import build from "../../../componentBuilder";

const PriceAndLikes = () => {
  return build("div", { class: "price-and-likes__container" }, [
    build("div", { class: "price-and-likes__container__likes" }, [
      build("span", { class: "price-and-likes__container__likes__counter" }, [
        "100 000",
      ]),
      build("img", {
        class: "price-and-likes__container__likes__icon",
        src: "/images/heart.svg",
        alt: "heart icon",
      }),
    ]),
    build("div", { class: "price-and-likes__container__price" }, [
      build("span", { class: "price-and-likes__container__price__value" }, [
        "500€ / jour",
      ]),
    ]),
  ]);
};

export default PriceAndLikes;

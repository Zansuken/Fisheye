// import { renderCarousel } from "..";
import build from "../../../../componentBuilder";

const Carousel = ({ media, focusedMedia }) => {
  const closeCarousel = () => {
    document.querySelector(".carousel").remove();
    document.querySelector("#app").classList.remove("dialog-open");
  };

  const updateFocusedMedia = (direction) => {
    console.log(direction);
    const items = document.querySelectorAll(
      ".carousel__container__media__element"
    );

    let focusedMediaIndex;
    items.forEach((item, index) => {
      if (item.getAttribute("data-focused") === "true") {
        focusedMediaIndex = index;
      }
    });

    items[focusedMediaIndex].setAttribute("data-focused", "false");

    if (direction === "next") {
      if (focusedMediaIndex === items.length - 1) {
        items[0].setAttribute("data-focused", "true");
      } else {
        items[focusedMediaIndex + 1].setAttribute("data-focused", "true");
      }
    } else {
      if (focusedMediaIndex === 0) {
        items[items.length - 1].setAttribute("data-focused", "true");
      } else {
        items[focusedMediaIndex - 1].setAttribute("data-focused", "true");
      }
    }
  };

  const mediaElements = media.map((media) => {
    const className = "carousel__container__media__element";
    const dataFocused = media.id === focusedMedia?.id ? "true" : "false";

    // Is video
    if (media.video) {
      return build(
        "video",
        {
          src: media.url,
          controls: true,
          "data-focused": dataFocused,
          "data-id": media.id,
          class: className,
        },
        [
          build("source", {
            src: media.url,
            type: "video/mp4",
          }),
        ]
      );
    }

    // Is image
    return build("img", {
      src: media.image,
      "data-focused": dataFocused,
      class: className,
      "data-id": media.id,
    });
  });

  return build("div", { class: "carousel" }, [
    build("div", { class: "carousel__container" }, [
      build("div", { class: "carousel__container__media-container" }, [
        build(
          "button",
          { class: "carousel__container__close", onClick: closeCarousel },
          [build("img", { src: "/images/cross.svg" })]
        ),
        build(
          "button",
          {
            class: "carousel__container__button previous",
            onClick: () => updateFocusedMedia("previous"),
          },
          [build("img", { src: "/images/arrow_color-primary.svg" })]
        ),
        build("div", { class: "carousel__container__media" }, mediaElements),
        build(
          "button",
          {
            class: "carousel__container__button next",
            onClick: () => updateFocusedMedia("next"),
          },
          [build("img", { src: "/images/arrow_color-primary.svg" })]
        ),
      ]),
      build("div", { class: "carousel__container__media__description" }, [
        build(
          "div",
          { class: "carousel__container__media__description__title" },
          [build("span", {}, [focusedMedia?.title])]
        ),
        build(
          "button",
          {
            class: "carousel__container__media__description__likes",
            onClick: () => console.log("TODO: TO BE IMPLEMENTED"),
          },
          [
            build("span", {}, [JSON.stringify(focusedMedia?.likes)]),
            build("img", {
              class: "content__media__description__likes__icon",
              src: "/images/heart.svg",
              alt: "heart icon",
            }),
          ]
        ),
      ]),
    ]),
  ]);
};

export default Carousel;

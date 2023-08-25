// import { renderCarousel } from "..";
import build from "../../../../componentBuilder";

let focusedMediaId = null;

const Carousel = ({ media, focusedMedia }) => {
  focusedMediaId = focusedMedia?.id;

  const closeCarousel = () => {
    document.querySelector(".carousel").remove();
    document.querySelector("#app").classList.remove("dialog-open");
  };

  const updateFocusedMedia = (direction) => {
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

    const getItemId = (item) => item.getAttribute("data-id");

    const updateContent = (index) => {
      const element = items[index];
      const mediaId = Number(getItemId(element));
      const focusMediaData = media.find(({ id }) => id === mediaId);

      focusedMediaId = mediaId;

      console.log(focusedMediaId);
      element.setAttribute("data-focused", "true");
      document.querySelector(
        ".carousel__container__media__description__title"
      ).innerText = focusMediaData.title;
      document.querySelector(
        ".content__media__description__likes__counter"
      ).innerText = focusMediaData.likes;
    };

    if (direction === "next") {
      if (focusedMediaIndex === items.length - 1) {
        updateContent(0);
      } else {
        updateContent(focusedMediaIndex + 1);
      }
    } else {
      if (focusedMediaIndex === 0) {
        updateContent(items.length - 1);
      } else {
        updateContent(focusedMediaIndex - 1);
      }
    }
  };

  const onLike = () => {
    console.log("TODO: TO BE IMPLEMENTED", focusedMediaId);
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
            onClick: onLike,
          },
          [
            build(
              "span",
              { class: "content__media__description__likes__counter" },
              [JSON.stringify(focusedMedia?.likes)]
            ),
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

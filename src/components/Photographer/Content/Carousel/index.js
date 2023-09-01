import { currentId } from "../..";
import { sessionId } from "../../../..";
import {
  getPhotographersMedia,
  updateMediaLikes,
} from "../../../../api/requests";
import build from "../../../../componentBuilder";
import { formatMediaArray } from "../../../../helpers/arrayHelpers";
import { classNames } from "../../../../helpers/common";
import { getLocalStorage } from "../../../../helpers/localstorage";
import { renderContent, sortMedia } from "../../MediaSorter/helpers";
import { updateTotalLikesCount } from "../../PriceAndLikes";

// TODO: Refactor this

let currentFocusedMedia = null;
let allMedia = null;
let isFocusedMediaLikedByUser = false;

/**
 * @param {Object} newMediaItem - Media item object
 * @param {String} currentVideoUrl - Current video url
 * @returns {void}
 * @description - Updates all media
 **/
const updateAllMedia = async (newMediaItem, currentVideoUrl) => {
  try {
    const mediaData = await getPhotographersMedia(currentId, false);
    const mediaDataFormatted = mediaData?.map((item) => {
      if (item.id === newMediaItem.id) {
        if (item.video) {
          return {
            ...item,
            url: currentVideoUrl,
            likes: newMediaItem.likes,
          };
        }
        return {
          ...item,
          likes: newMediaItem.likes,
        };
      } else {
        if (item.video) {
          return {
            ...item,
            url: currentVideoUrl,
          };
        }
        return item;
      }
    });
    const photographerContent = document.querySelector("#photographerContent");

    const currentSortingOption = document
      .querySelector(".media-sorter__container__select__button")
      .getAttribute("data-selected");

    renderContent(
      photographerContent,
      sortMedia(formatMediaArray(mediaDataFormatted), currentSortingOption)
    );
  } catch (error) {
    console.error(error);
  }
};

const updateCurrentFocusedMedia = (key, value) => {
  currentFocusedMedia[key] = value;
};

/**
 * @returns {void}
 * @description - Checks if media is liked by user
 **/
const isMediaLikedByUser = () => {
  const sessionId = getLocalStorage("sessionId");

  if (!sessionId) {
    return false;
  }

  isFocusedMediaLikedByUser =
    currentFocusedMedia?.usersLiked?.includes(sessionId);
};

/**
 * @param {Array} checkedLikes - Array of likes
 * @returns {void}
 * @description - Updates media liked style
 **/
const updateMediaLikedStyle = (checkedLikes) => {
  if (checkedLikes.includes(sessionId)) {
    document
      .querySelector(".carousel__container__media__description__likes")
      .classList.add("carousel__container__media__description__likes--liked");
  } else {
    document
      .querySelector(".carousel__container__media__description__likes")
      .classList.remove(
        "carousel__container__media__description__likes--liked"
      );
  }
};

/**
 * @param {Array} media - Photographer media
 * @param {Object} focusedMedia - Focused media
 * @description - Renders carousel
 * @returns {HTMLElement} - Carousel component
 **/
const Carousel = ({ media, focusedMedia }) => {
  if (!allMedia) {
    allMedia = media;
  }
  currentFocusedMedia = focusedMedia;

  let { likes: focusedMediaLikes, id: focusedMediaId } =
    currentFocusedMedia || {
      likes: null,
      id: null,
    };

  isMediaLikedByUser();

  const renderFocusedMediaLikes = (likes, usersLiked) => {
    document.querySelector(
      ".content__media__description__likes__counter"
    ).innerText = likes;
    updateCurrentFocusedMedia("likes", likes);

    updateTotalLikesCount(
      allMedia.reduce((acc, media) => acc + media.likes, 0)
    );

    updateMediaLikedStyle(usersLiked);
  };

  const closeCarousel = () => {
    document.querySelector(".carousel").remove();
    document.querySelector(".app").classList.remove("dialog-open");
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
      const focusMediaData = allMedia.find(({ id }) => id === mediaId);

      focusedMediaId = mediaId;

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

  /**
   * @param {String} videoUrl - Video url
   * @returns {void}
   * @description - Updates media likes
   **/
  const onLike = async (videoUrl) => {
    try {
      const { media } = await updateMediaLikes(focusedMediaId, sessionId);

      renderFocusedMediaLikes(media.likes, media.usersLiked);
      updateAllMedia(media, videoUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const mediaElements = allMedia.map((media) => {
    const className = "carousel__container__media__element";
    const dataFocused = media.id === focusedMedia?.id ? "true" : "false";

    // Is video
    if (media.video) {
      return build(
        "video",
        {
          src: media.url,
          loop: true,
          autoplay: dataFocused,
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
      alt: media.title,
    });
  });

  const currentVideoUrl = media.find((media) => media.video).url;

  return build(
    "div",
    { class: "carousel", "aria-label": "image closeup view" },
    [
      build("div", { class: "carousel__container" }, [
        build("div", { class: "carousel__container__media-container" }, [
          build(
            "button",
            {
              class: "carousel__container__close",
              onClick: closeCarousel,
              "aria-label": "Close dialog",
            },
            [build("img", { src: "/images/cross.svg", alt: "close icon" })]
          ),
          build(
            "button",
            {
              class: "carousel__container__button previous",
              "aria-label": "Previous image",
              onClick: () => updateFocusedMedia("previous"),
            },
            [
              build("img", {
                src: "/images/arrow_color-primary.svg",
                alt: "previous icon",
              }),
            ]
          ),
          build("div", { class: "carousel__container__media" }, mediaElements),
          build(
            "button",
            {
              class: "carousel__container__button next",
              "aria-label": "Next image",
              onClick: () => updateFocusedMedia("next"),
            },
            [
              build("img", {
                src: "/images/arrow_color-primary.svg",
                alt: "next icon",
              }),
            ]
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
              class: classNames([
                {
                  name: "carousel__container__media__description__likes",
                  isActive: true,
                },
                {
                  name: "carousel__container__media__description__likes--liked",
                  isActive: isFocusedMediaLikedByUser,
                },
              ]),
              onClick: () => onLike(currentVideoUrl),
            },
            [
              build(
                "span",
                {
                  class: "content__media__description__likes__counter",
                },
                [JSON.stringify(focusedMediaLikes)]
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
    ]
  );
};

export default Carousel;

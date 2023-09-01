import {
  getPhotographer,
  getPhotographersAvatar,
  getPhotographersMedia,
} from "../../api/requests";
import build from "../../componentBuilder";
import {
  currentRoute,
  getPhotographerId,
  isPhotoGrapherRoute,
} from "../../router";
import Banner from "./Banner";
import MediaSorter from "./MediaSorter";
import PriceAndLikes from "./PriceAndLikes";

export const currentId = getPhotographerId(currentRoute());

const photographer =
  isPhotoGrapherRoute(currentRoute()) && (await getPhotographer(currentId));

const avatar =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersAvatar(currentId));

export const media = await getPhotographersMedia(currentId, true);

/**
 * @returns {HTMLElement} - Photographer component
 * @description - Renders Photographer component
 **/
const Photographer = () => {
  const likes = media.map((item) => item.likes);
  const totalLikesCount = likes.reduce((acc, curr) => acc + curr, 0);
  const price = photographer.price;

  return build("main", { class: "photographer", id: "photographerContent" }, [
    Banner({ photographer, avatar }),
    MediaSorter(),
    PriceAndLikes({ totalLikesCount, price }),
  ]);
};

export default Photographer;

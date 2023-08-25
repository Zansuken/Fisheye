import {
  getPhotographer,
  getPhotographersAvatar,
  getPhotographersImages,
  getPhotographersVideos,
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

const currentId = getPhotographerId(currentRoute());
const photographer =
  isPhotoGrapherRoute(currentRoute()) && (await getPhotographer(currentId));

export const media =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersImages(currentId));

export const videoUrl =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersVideos(currentId));

const avatar =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersAvatar(currentId));

const Photographer = () => {
  return build("div", { class: "photographer", id: "photographerContent" }, [
    Banner({ photographer, avatar }),
    MediaSorter(),
    PriceAndLikes(),
  ]);
};

export default Photographer;

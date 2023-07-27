import { getPhotographer, getPhotographersPhotos } from "../../api/requests";
import build from "../../componentBuilder";
import {
  currentRoute,
  getPhotographerId,
  isPhotoGrapherRoute,
} from "../../router";
import Banner from "./Banner";
import Content from "./Content";

const currentId = getPhotographerId(currentRoute());
const photographer =
  isPhotoGrapherRoute(currentRoute()) && (await getPhotographer(currentId));

const media =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersPhotos(currentId));

const Photographer = () => {
  console.log(photographer);
  return build("div", { class: "photographer" }, [
    Banner({ photographer }),
    Content({ media }),
  ]);
};

export default Photographer;

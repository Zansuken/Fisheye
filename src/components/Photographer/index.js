import {
  getPhotographer,
  getPhotographersAvatar,
  getPhotographersImages,
  getPhotographersVideos,
  getVideoDetails,
} from "../../api/requests";
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

const images =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersImages(currentId));

const videoUrl =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersVideos(currentId));

let videoDetailsId = "";

if (images) {
  videoDetailsId = images.find((media) => media.video ?? media.id);
}

const videoDetails =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getVideoDetails(videoDetailsId.id));

const avatar =
  isPhotoGrapherRoute(currentRoute()) &&
  (await getPhotographersAvatar(currentId));

const Photographer = () => {
  return build("div", { class: "photographer" }, [
    Banner({ photographer, avatar }),
    Content({
      images: images.filter((media) => !media.video),
      videos: [{ url: videoUrl, ...videoDetails[0] }],
    }),
  ]);
};

export default Photographer;

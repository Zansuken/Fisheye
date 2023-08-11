import { getPhotographers } from "../../api/requests";
import build from "../../componentBuilder";
import routes from "../../constants/routes";
import { currentRoute } from "../../router";
import PhotographerCard from "./PhotographerCard";

let photographers = [];

if (currentRoute() === routes.HOME) {
  photographers = await getPhotographers();
}

const Home = () => {
  const cards = photographers?.map((photographer) =>
    PhotographerCard(photographer)
  );

  return build("div", { class: "home" }, cards);
};

export default Home;

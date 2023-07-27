import { getPhotographers } from "../../api/requests";
import build from "../../componentBuilder";
import PhotographerCard from "./PhotographerCard";

const photographers = await getPhotographers();

const Home = () => {
  const cards = photographers.map((photographer) =>
    PhotographerCard(photographer)
  );

  return build("div", { class: "home" }, cards);
};

export default Home;

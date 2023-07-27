import build from "../../componentBuilder";
import routes from "../../constants/routes";
import { formatPhotographerRoute } from "../../router";
import Home from "../Home";
import Photographer from "../Photographer";
import Header from "../shared/Header";

const App = (currentRoute) => {
  const isHomePage = currentRoute === routes.HOME;

  const children = [Header({ isHomePage })];

  switch (currentRoute) {
    case routes.HOME:
      children.push(Home());
      break;
    case formatPhotographerRoute(currentRoute):
      children.push(Photographer());
      break;
    default:
      children.push("Not Found");
      break;
  }

  return build("div", { class: "app" }, children);
};

export default App;

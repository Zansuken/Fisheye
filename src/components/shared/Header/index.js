import build from "../../../componentBuilder";
import Logo from "./Logo";
import Title from "./Title";

const Header = ({ isHomePage }) => {
  if (isHomePage) {
    return build("div", { class: "header" }, [Logo(), Title()]);
  }

  return build("div", { class: "header" }, [Logo()]);
};

export default Header;

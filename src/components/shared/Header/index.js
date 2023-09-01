import build from "../../../componentBuilder";
import Logo from "./Logo";
import Title from "./Title";

/**
 * @param {Boolean} isHomePage - Is current page home page
 * @returns {HTMLElement} - Header component
 * @description - Renders Header component
 **/
const Header = ({ isHomePage }) => {
  if (isHomePage) {
    return build("header", { class: "header" }, [Logo(), Title()]);
  }

  return build("header", { class: "header" }, [Logo()]);
};

export default Header;

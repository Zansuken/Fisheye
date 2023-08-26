import build from "../../../componentBuilder";

/**
 * @returns {HTMLElement} - Logo component
 * @description - Renders Logo component
 **/
const Logo = () => {
  const logo = () =>
    build("div", {
      alt: "logo",
      class: "logo",
    });

  return build("a", { href: "/home", alt: "Fisheye Home page" }, [logo()]);
};

export default Logo;

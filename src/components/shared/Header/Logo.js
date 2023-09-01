import build from "../../../componentBuilder";

/**
 * @returns {HTMLElement} - Logo component
 * @description - Renders Logo component
 **/
const Logo = () => {
  const logo = () =>
    build("div", {
      title: "logo",
      class: "logo",
    });

  return build(
    "a",
    {
      href: "/home",
      title: "Page d’accueil",
      "aria-label": "Fisheye page d'accueil",
    },
    [logo()]
  );
};

export default Logo;

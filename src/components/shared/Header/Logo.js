import build from "../../../componentBuilder";

const Logo = () => {
  const logo = () =>
    build("div", {
      alt: "logo",
      class: "logo",
    });

  return build("a", { href: "/home", alt: "Fisheye Home page" }, [logo()]);
};

export default Logo;

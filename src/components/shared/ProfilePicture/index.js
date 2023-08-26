import build from "../../../componentBuilder";

/**
 * @param {String} src - Profile picture source
 * @param {String} alt - Profile picture alt
 * @returns {HTMLElement} - ProfilePicture component
 * @description - Renders ProfilePicture component
 **/
const ProfilePicture = ({ src, alt }) => {
  const image = build("img", {
    class: "photographer-card__picture",
    src,
    alt,
  });
  return build("div", { class: "photographer-card__picture-container" }, [
    image,
  ]);
};

export default ProfilePicture;

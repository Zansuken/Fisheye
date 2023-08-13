import build from "../../../componentBuilder";

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

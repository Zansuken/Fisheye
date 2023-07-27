import build from "../../../componentBuilder";

const ProfilePicture = ({ src }) => {
  const image = build("img", {
    class: "photographer-card__picture",
    src,
  });
  return build("div", { class: "photographer-card__picture-container" }, [
    image,
  ]);
};

export default ProfilePicture;

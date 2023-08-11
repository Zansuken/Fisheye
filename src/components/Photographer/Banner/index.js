import build from "../../../componentBuilder";
import Button from "../../shared/Button";
import Location from "../../shared/Location";
import PhotographerName from "../../shared/Name";
import ProfilePicture from "../../shared/ProfilePicture";
import TagLine from "../../shared/TagLine";
import ContactDialog, { openDialog } from "../ContactDialog";

const Banner = ({
  photographer: { id, name, city, country, tagline },
  avatar,
}) => {
  const description = build("div", { class: "banner__description" }, [
    PhotographerName({ name, heading: "h1" }),
    Location({ city, country }),
    TagLine({ tagline }),
  ]);

  const rightSection = build("div", { class: "banner__right-section" }, [
    Button({
      content: "Contactez-moi",
      onClick: openDialog,
    }),
    ProfilePicture({
      src: avatar,
    }),
    ContactDialog({ id, name }),
  ]);

  return build("div", { class: "banner" }, [description, rightSection]);
};

export default Banner;

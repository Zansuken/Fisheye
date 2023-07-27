import build from "../../../componentBuilder";
import Button from "../../shared/Button";
import Location from "../../shared/Location";
import PhotographerName from "../../shared/Name";
import ProfilePicture from "../../shared/ProfilePicture";
import TagLine from "../../shared/TagLine";
import ContactDialog, { openDialog } from "../ContactDialog";

const Banner = ({ photographer: { name, city, country, tagline } }) => {
  const description = build("div", { class: "banner__description" }, [
    PhotographerName({ name, heading: "h1" }),
    Location({ city, country }),
    TagLine({ tagline }),
  ]);

  return build("div", { class: "banner" }, [
    description,
    Button({
      content: "Contactez-moi",
      onClick: openDialog,
    }),
    ProfilePicture({
      src: "https://fastly.picsum.photos/id/227/200/200.jpg?hmac=_HAD3ZQuIUMd1tjQfU5i21RCLHRDH_r_Xuq0q6iRN-o",
    }),
    ContactDialog({ name }),
  ]);
};

export default Banner;

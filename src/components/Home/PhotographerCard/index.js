import build from "../../../componentBuilder";
import routes from "../../../constants/routes";
import Location from "../../shared/Location";
import PhotographerName from "../../shared/Name";
import ProfilePicture from "../../shared/ProfilePicture";
import TagLine from "../../shared/TagLine";

const PhotographerCard = ({ id, name, city, country, tagline, price }) => {
  const link = () =>
    build(
      "a",
      {
        class: "photographer-card__link",
        href: `${window.location.origin}${routes.PHOTOGRAPHER.replace(
          ":id",
          id
        )}`,
        alt: "",
      },
      [
        ProfilePicture({
          src: "https://fastly.picsum.photos/id/227/200/200.jpg?hmac=_HAD3ZQuIUMd1tjQfU5i21RCLHRDH_r_Xuq0q6iRN-o",
        }),
        PhotographerName({ name }),
      ]
    );

  const formattedPrice = () =>
    build("p", { class: "photographer-card__price" }, [`${price}€/jour`]);

  const description = () =>
    build("div", { class: "photographer-card__description" }, [
      Location({ city, country }),
      TagLine({ tagline }),
      formattedPrice(),
    ]);

  return build("div", { class: "photographer-card" }, [link(), description()]);
};

export default PhotographerCard;

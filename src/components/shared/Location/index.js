import build from "../../../componentBuilder";

const Location = ({ city, country }) =>
  build("p", { class: "photographer-card__location" }, [`${city}, ${country}`]);

export default Location;

import build from "../../../componentBuilder";

const PhotographerName = ({ name, heading = "h2" }) =>
  build(heading, { class: "photographer-card__name" }, [name]);

export default PhotographerName;

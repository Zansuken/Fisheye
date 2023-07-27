import build from "../../../componentBuilder";

const TagLine = ({ tagline }) =>
  build("p", { class: "photographer-card__tagline" }, [tagline]);

export default TagLine;

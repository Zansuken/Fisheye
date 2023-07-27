import build from "../../../componentBuilder";

const Content = ({ media }) => {
  console.log(media);
  return build("div", { class: "content" }, "Content");
};

export default Content;

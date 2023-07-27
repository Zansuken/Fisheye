import build from "../../../componentBuilder";

const Button = ({ content, onClick }) => {
  return build("button", { class: "button", onClick }, content);
};

export default Button;

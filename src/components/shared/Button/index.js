import build from "../../../componentBuilder";

const Button = ({ content, onClick, fullWidth = false }) => {
  return build(
    "button",
    { class: `button${fullWidth ? " fullWidth" : ""}`, onClick },
    content
  );
};

export default Button;

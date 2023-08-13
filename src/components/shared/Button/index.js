import build from "../../../componentBuilder";

const Button = ({ content, onClick, fullWidth = false, ...restAttributes }) => {
  return build(
    "button",
    {
      class: `button${fullWidth ? " fullWidth" : ""}`,
      onClick,
      ...restAttributes,
    },
    content
  );
};

export default Button;

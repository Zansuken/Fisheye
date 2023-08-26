import build from "../../../componentBuilder";

/**
 * @param {String} content - Button content
 * @param {Function} onClick - Button click handler
 * @param {Boolean} fullWidth - Button fullWidth
 * @param {Object} restAttributes - html button existing attributes
 * @returns {HTMLElement} - Button component
 * @description - Renders Button component
 **/
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

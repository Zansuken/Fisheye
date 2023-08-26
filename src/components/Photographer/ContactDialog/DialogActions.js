import build from "../../../componentBuilder";
import Button from "../../shared/Button";

/**
 * @param {Function} onFormSubmit - Form submit handler
 * @returns {HTMLElement} - DialogActions component
 * @description - Renders DialogActions component
 **/
const DialogActions = ({ onFormSubmit }) => {
  return build("div", { class: "contact-dialog__actions" }, [
    Button({ content: "Envoyer", onClick: onFormSubmit }),
  ]);
};

export default DialogActions;

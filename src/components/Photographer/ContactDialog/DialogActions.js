import build from "../../../componentBuilder";
import Button from "../../shared/Button";

const DialogActions = ({ onFormSubmit }) => {
  return build("div", { class: "contact-dialog__actions" }, [
    Button({ content: "Envoyer", onClick: onFormSubmit }),
  ]);
};

export default DialogActions;

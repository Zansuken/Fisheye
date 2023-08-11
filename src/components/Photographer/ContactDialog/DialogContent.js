import build from "../../../componentBuilder";
import Input from "../../shared/Input";

const DialogContent = () =>
  build("div", { class: "contact-dialog__form-group" }, [
    Input({
      label: "Prénom",
      name: "firstName",
      type: "text",
      placeholder: "Prénom",
      required: true,
      fullWidth: true,
    }),
    Input({
      label: "Nom",
      name: "lastName",
      type: "text",
      placeholder: "Nom",
      required: true,
      fullWidth: true,
    }),
    Input({
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      fullWidth: true,
    }),
    Input({
      label: "Votre message",
      name: "message",
      type: "textarea",
      placeholder: "Votre message",
      required: true,
      fullWidth: true,
    }),
  ]);

export default DialogContent;

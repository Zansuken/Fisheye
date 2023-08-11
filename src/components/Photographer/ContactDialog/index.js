import { sendContactForm } from "../../../api/requests";
import build from "../../../componentBuilder";
import Notification from "../../shared/Notification";
import DialogActions from "./DialogActions";
import DialogContent from "./DialogContent";
import DialogTitle from "./DialogTitle";

export const openDialog = () => {
  const dialog = document.querySelector(".contact-dialog");
  dialog.showModal();
};

export const closeDialog = () => {
  const dialog = document.querySelector(".contact-dialog");
  dialog.close();
};

// TODO: Reset form on submit

const onSubmit = (id) => {
  const { value: firstName } = document.querySelector("#firstName");

  const { value: lastName } = document.querySelector("#lastName");

  const { value: email } = document.querySelector("#email");

  const { value: message } = document.querySelector("#message");

  const formData = {
    firstName,
    lastName,
    email,
    message,
  };

  let errors = [];

  Object.entries(formData).forEach(([key, value]) => {
    if (!value) {
      errors.push(key);
      document
        .querySelector(`#${key}`)
        .previousElementSibling.classList.add("error");
    } else {
      document
        .querySelector(`#${key}`)
        .previousElementSibling.classList.remove("error");
    }
  });

  const isFormValid = errors.length === 0;

  Notification({
    message: "Un ou plusieurs champs sont manquants",
    type: "error",
    hasDialog: true,
  });
  if (!isFormValid) return;

  sendContactForm(id, formData);
  closeDialog();

  Notification({
    message: "Votre message a bien été envoyé",
    type: "success",
  });
};

let idToSend = null;

const ContactDialog = ({ id, name }) => {
  idToSend = id;

  return build(
    "dialog",
    { class: "contact-dialog" },
    build("div", { class: "contact-dialog__root" }, [
      DialogTitle({ name }),
      build("div", { class: "contact-dialog__form" }, [
        DialogContent(),
        DialogActions({ onFormSubmit: () => onSubmit(idToSend) }),
      ]),
    ])
  );
};

export default ContactDialog;

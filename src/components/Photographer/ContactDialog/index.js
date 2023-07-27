import build from "../../../componentBuilder";
import DialogTitle from "./DialogTitle";

export const openDialog = () => {
  const dialog = document.querySelector(".contact-dialog");
  dialog.showModal();
};

export const closeDialog = () => {
  const dialog = document.querySelector(".contact-dialog");
  dialog.close();
};

const ContactDialog = ({ name }) => {
  return build(
    "dialog",
    { class: "contact-dialog" },
    build("div", { class: "contact-dialog__root" }, [DialogTitle({ name })])
  );
};

export default ContactDialog;

import { closeDialog } from ".";
import build from "../../../componentBuilder";

const DialogTitle = ({ name }) => {
  const title = build("h1", { class: "contact-dialog__title" }, [
    "Contactez-moi",
    build("br"),
    name,
  ]);

  const closeButton = build("button", {
    class: "contact-dialog__close",
    onClick: closeDialog,
  });

  const wrapper = build("div", { class: "contact-dialog__title-wrapper" }, [
    title,
    closeButton,
  ]);

  return wrapper;
};

export default DialogTitle;

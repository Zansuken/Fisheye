import build from "../../../componentBuilder";

/**
 * @param {String} message - Notification message
 * @param {String} type - Notification type
 * @param {Boolean} hasDialog - Notification hasDialog
 * @returns {HTMLElement} - Notification component
 * @description - Renders Notification component
 **/
const Notification = ({ message, type, hasDialog }) => {
  const app = document.querySelector(".app");

  if (hasDialog) {
    const dialog = document.querySelector("dialog");

    dialog.appendChild(
      build(
        "div",
        { class: `notification ${type}`, "aria-live": "polite" },
        message
      )
    );

    setTimeout(() => {
      document.querySelector(".notification").remove();
    }, 5000);

    return;
  }

  app.appendChild(
    build(
      "div",
      { class: `notification ${type}`, "aria-live": "polite" },
      message
    )
  );

  setTimeout(() => {
    document.querySelector(".notification").remove();
  }, 5000);
};

export default Notification;

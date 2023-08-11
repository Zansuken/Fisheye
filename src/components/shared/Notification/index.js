import build from "../../../componentBuilder";

const Notification = ({ message, type, hasDialog }) => {
  const app = document.querySelector("#app");

  if (hasDialog) {
    const dialog = document.querySelector("dialog");

    dialog.appendChild(
      build("div", { class: `notification ${type}` }, message)
    );

    setTimeout(() => {
      document.querySelector(".notification").remove();
    }, 5000);

    return;
  }

  app.appendChild(build("div", { class: `notification ${type}` }, message));

  setTimeout(() => {
    document.querySelector(".notification").remove();
  }, 5000);
};

export default Notification;

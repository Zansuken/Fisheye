import App from "./components/App";
import { currentRoute, handleRoute } from "./router";

/**
 * Handles the popstate event
 * @returns {void}
 */
window.addEventListener("popstate", () => {
  handleRoute(window.location.pathname);
});

/**
 * Handles the initial page load
 * @returns {void}
 **/
handleRoute(window.location.pathname);

const root = document.getElementById("app");

root.appendChild(App(currentRoute()));

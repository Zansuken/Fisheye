import App from "./components/App";
import { getLocalStorage, updateLocalStorage } from "./helpers/localstorage";
import { currentRoute, handleRoute } from "./router";
import { generateId } from "./session";

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

export const sessionId = getLocalStorage("sessionId");

if (!sessionId) {
  updateLocalStorage("sessionId", generateId());
}

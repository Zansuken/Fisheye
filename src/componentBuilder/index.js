import { isNode, isString } from "../helpers/validationHelpers";

/**
 * @param {HTMLElement} element - An HTML element
 * @param {Array.<HTMLElement | string>} children - An array of nodes or strings
 * @returns {void}
 */
const recursiveAppend = (element, children) => {
  children.forEach((child) => {
    if (isString(child)) {
      element.appendChild(document.createTextNode(child));
    } else if (isNode(child)) {
      element.appendChild(child);
    } else if (Array.isArray(child)) {
      recursiveAppend(element, child);
    }
  });
};

/**
 * @typedef {Object.<string, any>} GlobalAttributes
 */

/**
 *
 * @param {string} elementType - Any valid HTML element type
 * @param {GlobalAttributes} attributes - An object of attributes
 * @param  {HTMLElement | string} [children] - An array of nodes or strings
 * @returns {HTMLElement} - A new HTML element
 *
 * @example
 * ```
 * build("div", { class: "container" },
 *  [ build("input", { class: "textField", type: "text" }),
 *    build("button", { class: "submitButton", onClick: () => submit() },
 *      ["SUBMIT"])
 *  ])
 * ```
 */
const build = (elementType, attributes, ...children) => {
  const element = document.createElement(elementType);

  // Add a loading state for img and video elements
  if (elementType === "img" || elementType === "video") {
    element.onload = () => {
      // Set the loading state to false when the media is loaded
      element.setAttribute("data-loading", "false");
    };

    // Set the initial loading state to true
    element.setAttribute("data-loading", "true");
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "onClick":
          element.addEventListener("click", value);
          break;

        case "onKeyDown":
          element.addEventListener("keydown", value);
          break;

        case "open":
          element.open = value;
          break;

        case "required":
          element.required = value;
          break;

        case "disabled":
          element.disabled = value;
          break;

        default:
          element.setAttribute(key, value);
          break;
      }
    });
  }

  if (!Array.isArray(children)) {
    throw new Error(
      `The third argument of build() must be an array of nodes or strings.`
    );
  }

  recursiveAppend(element, children);

  return element;
};

export default build;

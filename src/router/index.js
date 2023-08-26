import routes from "../constants/routes";

/**
 * Checks if the route is a photographer route
 * @param {string} route The route to check
 * @returns {boolean} True if the route is a photographer route, false otherwise
 **/
export const isPhotoGrapherRoute = (route) => {
  const { PHOTOGRAPHER } = routes;

  return route.search(PHOTOGRAPHER.slice(0, -3)) !== -1;
};

/**
 * Formats the photographer route
 * @param {string} route The route to format
 * @returns {string} The formatted route
 **/
export const formatPhotographerRoute = (route) => {
  const { PHOTOGRAPHER } = routes;

  if (isPhotoGrapherRoute(route)) {
    const id = route.slice(PHOTOGRAPHER.slice(0, -3).length);
    return PHOTOGRAPHER.replace(":id", id);
  }

  return route;
};

/**
 * Returns the photographer id
 * @param {string} route The route to format
 * @returns {string} The photographer id
 * @returns {null} If the route is not a photographer route
 **/
export const getPhotographerId = (route) => {
  const { PHOTOGRAPHER } = routes;

  if (isPhotoGrapherRoute(route)) {
    const id = route.slice(PHOTOGRAPHER.slice(0, -3).length);
    return id;
  }

  return null;
};

/**
 * Handles the routing of the application
 * @param {string} route The route to navigate to
 * @returns {void}
 */
export const handleRoute = (route) => {
  const { HOME, PHOTOGRAPHERS, PHOTOGRAPHER } = routes;

  let buildedPhotographerRoute = PHOTOGRAPHER;

  if (isPhotoGrapherRoute(route)) {
    buildedPhotographerRoute = formatPhotographerRoute(route);
  }

  switch (route) {
    case HOME:
      // Handle the home route
      break;
    case PHOTOGRAPHERS:
      // Handle the photographers route
      break;
    case buildedPhotographerRoute:
      // Handle the photographer route
      break;
    default:
      navigateTo(HOME);
      break;
  }
};

/**
 * Navigates to a new route
 * @param {string} route The route to navigate to
 * @returns {void}
 */
export const navigateTo = (route) => {
  window.history.pushState(null, null, route);
  handleRoute(route);
};

/**
 * Returns the current route
 * @returns {string} The current route
 */
export const currentRoute = () => window.location.pathname;

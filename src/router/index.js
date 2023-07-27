import routes from "../constants/routes";

export const isPhotoGrapherRoute = (route) => {
  const { PHOTOGRAPHER } = routes;

  return route.search(PHOTOGRAPHER.slice(0, -3)) !== -1;
};

export const formatPhotographerRoute = (route) => {
  const { PHOTOGRAPHER } = routes;

  if (isPhotoGrapherRoute(route)) {
    const id = route.slice(PHOTOGRAPHER.slice(0, -3).length);
    return PHOTOGRAPHER.replace(":id", id);
  }

  return route;
};

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
      // Handle the 404 route
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

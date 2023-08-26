/**
 * @param {Array} classes
 * @returns {String}
 * @description
 * This function takes an array of objects and returns a string of class names
 * based on the isActive property of each object.
 */
export const classNames = (classes) => {
  let className = "";

  classes.forEach(({ name, isActive }) => {
    if (isActive) {
      className += `${name} `;
    }
  });

  return className;
};

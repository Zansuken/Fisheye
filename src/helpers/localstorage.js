/**
 * @param {string} key
 * @param {any} value
 * @returns {void}
 * @description - Sets item in local storage
 */
export const updateLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

/**
 * @param {string} key
 * @returns {any}
 * @description - Gets item from local storage and parses it
 */
export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

/**
 * @param {string} key
 * @returns {void}
 * @description - Removes item from local storage
 **/
export const removeLocalStorage = (key) => localStorage.removeItem(key);

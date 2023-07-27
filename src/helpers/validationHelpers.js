/**
 *
 * @param {Node} node - Any node
 * @returns {boolean} - True if node is an instance of Node
 */
export const isNode = (node) => node instanceof Node;
/**
 *
 * @param {string} string - Any string
 * @returns {boolean} - True if string is a string
 */
export const isString = (string) => typeof string === "string";

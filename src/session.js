// generate an id with a length of 18 for the session with numbers and letters that needs to be unique
export const generateId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

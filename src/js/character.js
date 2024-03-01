export const createCharacter = (type) => {
  return {
    type: type,
  };
}

export const assignAttributes = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};
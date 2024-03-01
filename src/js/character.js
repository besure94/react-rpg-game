export const createCharacter = (type) => {
  return {
    type: type,
    level: 1
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
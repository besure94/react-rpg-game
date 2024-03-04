export const createCharacter = (type) => {
  return () => {
    const newCharacter = {
      type: type,
      level: 1,
      health: 100
    }
    return newCharacter;
  };
};

export const setAttributes = (prop) => {
  return (value) => {
    return (state) => {
      const updatedState = {
        ...state,
        [prop]: (state[prop] || 0) + value
      };
      if (updatedState[prop] >= 20) {
        updatedState.level++;
      }
      return updatedState;
    };
  };
};

export const storeAttributes = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeAttributes();


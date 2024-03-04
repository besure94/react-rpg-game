export const createCharacter = (type) => {
  return () => {
    const newCharacter = {
      type: type,
      level: 1,
      health: 100,
      items: []
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
        updatedState.health += 5;
        updatedState[prop] += 1;
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

export const enhanceAttributes = (item, prop, value) => {
  return (state) => {
    if (state.items.length < 5) {
      return {
        ...state,
        [prop]: (state[prop] || 0) + value,
        items: [...state.items, item]
      };
    } else {
      console.log(`${state.type} cannot carry more than 5 items!`);
      return state;
    }
  };
};


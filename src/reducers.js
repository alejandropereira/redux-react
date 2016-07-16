export const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const newCard = Object.assign({}, action.data, {
        score: 1,
        id: + new Date,
      });

      return state.concat([newCard]);
    }
    default: {
      return state || [];
    }
  }
};

export const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK': {
      const newCard = {
        name: action.data,
        id: + new Date,
      };

      return state.concat([newCard]);
    }
    default: {
      return state || [];
    }
  }
};

export const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default : return !!state;
  }
};


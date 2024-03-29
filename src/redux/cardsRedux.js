import shortid from "shortid";


export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

export const favoriteCards = cards => {
  return cards.filter(card => card.isFavorite === true);
};

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');



export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload })
export const toggleCard = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
};

export default cardsReducer;
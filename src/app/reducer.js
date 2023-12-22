// reducer.js
import { LOAD_ITEMS } from './actions';

const initialState = {
  items: [],
  loading: false,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;

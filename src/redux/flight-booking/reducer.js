import { DELETE, SUBMIT } from "./actionTypes";

const initialState = {
  value: [],
};

const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        value: [...state.value, action.payload],
      };

    case DELETE:
      const newList = state.value.filter((val) => val.id !== action.id);
      return {
        ...state,
        value: newList,
      };

    default:
      return state;
  }
};
export default submitReducer;

import { DELETE, SUBMIT } from "./actionTypes";

export const submit = (value) => {
  return {
    type: SUBMIT,
    payload: value,
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE,
    id,
  };
};

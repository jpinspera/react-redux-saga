import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constraints";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Add to cart condition", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      console.warn("EMPTY_CART condition", action);
      data=[]
      return [...data];
    default:
      return data;
  }
};

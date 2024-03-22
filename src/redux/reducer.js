import { ADD_TO_CART, REMOVE_TO_CART } from "./constraints";

export const cartData = (data = [], action) => {
  // if(action.type === ADD_TO_CART){
  //     console.warn("Reducer called",action)
  //     return action.data;
  // }else{
  //     return "no action matched"
  // }

  switch (action.type) {
    case ADD_TO_CART:
      //Add to cart logic
      console.warn("Add to cart condition", action);
      return 1 + 1;
    default:
      return "no action called";
  }
};

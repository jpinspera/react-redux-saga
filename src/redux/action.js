import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constraints";

export const addToCart = (data) =>{
    console.warn("add to cart action called", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) =>{
    console.warn("remove from cart action called", data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () =>{
    console.warn("empty cart action called");
    return {
        type: EMPTY_CART
    }
}
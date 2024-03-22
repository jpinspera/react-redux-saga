import {ADD_TO_CART} from "./constraints"

export const cartData = (data = [], action) =>{
    if(action.type === ADD_TO_CART){
        console.warn("Reducer called",action)
        return action.data;
    }else{

        return "no action matched"
    }
}
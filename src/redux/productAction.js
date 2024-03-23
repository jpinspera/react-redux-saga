import { PRODUCT_LIST } from "./constraints";

export const productList = async() =>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = data.json();
    console.warn("product list action called", data);
    return {
        type: PRODUCT_LIST,
        data
    }
}
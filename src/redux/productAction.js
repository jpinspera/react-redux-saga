import { PRODUCT_LIST } from "./constraints";

export const productList = () =>{
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = data.json();
    let data = "hello";
    console.warn("product list action called", data);
    return {
        type: PRODUCT_LIST,
        data
    }
}
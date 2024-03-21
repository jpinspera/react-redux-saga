export const addToCart = (data) =>{
    console.warn("action called", data);
    return {
        type: 'Add_To_Cart',
        data
    }
}
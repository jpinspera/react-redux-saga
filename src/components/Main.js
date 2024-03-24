import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.productData);
  console.warn("data in main component from saga",data);
  const product = {
    name: "I phone",
    type: "mobile",
    price: 10000,
    color: "red"
  }
  return (
    <div>
      <div>
        <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
      </div>
      <div>
        <button onClick={()=> dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
        <button onClick={()=> dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={()=> dispatch(productList())}>Get Product List</button>
      </div>
    </div>
  );
}

export default Main;

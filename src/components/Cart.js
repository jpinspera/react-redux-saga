import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next) => prev+next);
  console.warn(amount);

  return (
    <div>
      <Link to={"/"}>Product List</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjest-price"><span>Amount</span><span>{amount}</span></div>
          <div className="adjest-price"><span>Discount</span><span>{amount/10}</span></div>
          <div className="adjest-price"><span>Tax</span><span>250.0</span></div>
          <div className="adjest-price"><span>Total</span><span>{amount - (amount/10) + 250 }</span></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

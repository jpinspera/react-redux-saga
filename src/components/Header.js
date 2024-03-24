import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("redux data in header", result);
  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="logo">E-Comm</h1>
      </Link>
      <Link to={"/cart"} relative="path">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;

import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-container">
      <img
        src="/src/assets/cart.svg"
        alt="carrito"
        width={20}
        height={20}
        style={{ color: "white" }}
      />{" "}
      {cartItems}
    </div>
  );
};

export default CartWidget;

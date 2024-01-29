import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
  <div className="">
    <img src={productImage} alt="" />
    <div className="">
        <p>{productName}</p>
    </div>
    <p>Price: ${price}</p>
    <div className="">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input value={cartItems[id]}
        onChange={(e) => updateCartItemCount(Number(e.target.value),id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
    </div>

  </div>
  )
}

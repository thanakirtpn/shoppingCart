import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const{addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]

  return (
  <div className="">
    <img src={productImage} alt="" />
    <div className="">
        <p>
            <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        <button onClick={()=> addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
    </div>

  </div>)

};

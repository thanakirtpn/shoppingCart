import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./cart-item"
import { useNavigate } from "react-router-dom";


export const Cart = () => { 
  const {cartItems, getTotalCartAmount,checkout} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div>
      <div className="">
        <h1>Your Cart Items</h1>
      </div>
      <div className="">
        {PRODUCTS.map((product) =>{
            if (cartItems[product.id] !== 0){
              return <CartItem data={product}/>
            }
        })}
      </div>
    {totalAmount > 0 ? (
      <div className="">
      <p>Subtotal: ${totalAmount}</p>
      <button onClick={() => navigate("/")}>Countinue Shopping</button>
      <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
    </div>
    ):(
      <h1>Your cart is empty</h1>
    )}
      
    </div>
  )
}

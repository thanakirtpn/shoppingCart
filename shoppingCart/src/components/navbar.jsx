import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  return (
    <div>
      <div className="">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32}/>
         
        </Link>
      </div>
    </div>
  )
}

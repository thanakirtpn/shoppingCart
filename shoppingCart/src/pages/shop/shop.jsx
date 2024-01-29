import React from 'react'
import {PRODUCTS} from "../../products"
import { Product } from "./product";


export const Shop = () => {
  return (
    <div className="">
      <div className="">
        <h1>PedroTech Shop</h1>
      </div>
      <div className="">
        <div className="">{PRODUCTS.map((product) =>(
          <Product data={product}/>
        ))}</div>
      </div>
    </div>
  )
}

//import React from "react";
import React,{useState} from 'react';


function Item({ name, category }) {
  const [inCart,setCart]= useState(false)

  const handleClick = (e) => {
    setCart(!inCart)
  }
  
  return (
    <li className={inCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "remove": "add"}>{inCart ? "Remove":"Add to Cart"}</button>
    </li>
  );
}

export default Item;

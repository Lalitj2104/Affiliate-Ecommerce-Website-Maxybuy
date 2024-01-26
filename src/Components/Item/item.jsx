import React from 'react'
import './item.css'
import product1 from '../../assets/product_1.png'
import { NavLink } from 'react-router-dom'
const Item = ({ id,name,  image, newPrice, oldPrice, off = 50 }) => {
  function selectedItem() {
    console.log("Selected Item")
  }
  return (

    <NavLink image={image} onClick={selectedItem}


      to={{
        pathname: '/productDetails',
      }}
      state={{ image, name, newPrice, oldPrice, off ,id}}
      className="item">
      <div className="product-img">
        <img src={image} alt="product_1" />
      </div>
      <div className="product-name">

        <p>{name}</p>

      </div>

      <div className="price-rating">
        <div className="discount-price">
          <span>₹{newPrice}</span>
        </div>
        <div className="original-price">
          <span>₹{oldPrice}</span>
        </div>


        <div className="off">
          <span>{off}% OFF</span>
        </div>

      </div>
    </NavLink>
  )
}

export default Item
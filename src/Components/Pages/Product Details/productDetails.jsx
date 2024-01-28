import React from 'react'
import './productDetails.css'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Store/storeContext'
const ProductDetails = () => {
  let location = useLocation();
  let { image, name, newPrice, oldPrice, off, id } = location.state || {};
  const { addToCart } = useContext(StoreContext)



  return (
    <div className="product-details-page">
      <div className="product-details">

        <div className="upper">
          <div className="left-img-details">
            <div className="diff-img">


              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>


            </div>
            <div className="img-display">
              <img src={image} alt="" />
            </div>

          </div>
          <div className="right-other-details">
            <div className="details">
              <div className="product-name-details">
                <h1>{name}</h1>
              </div>
              <div className="rating">
                <span>🔸🔸🔸🔸🔸({off})</span>
              </div>
              <div className="price">
                <span className='old-price'>₹{oldPrice}</span>
                <span className='new-price'>₹{newPrice}</span>
              </div>
              <div className="para-about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa quasi commodi ratione.</p>
              </div>
              <div className="sizes">
                <h4>Select Size</h4>
                <div className="sizes-btn">
                  <div className="s size-btn">S</div>
                  <div className="m  size-btn">M</div>
                  <div className="l  size-btn">L</div>
                  <div className="xl  size-btn">XL</div>
                  <div className="xxl  size-btn">XXL</div>
                </div>
              </div>
              <div className="add-to-cart" onClick={() => addToCart(id)}>
                Add to cart
              </div>
              <div className="category-tag">
                <p>Category<span>: Lorem, ipsum dolor.</span></p>
                <p>Tags<span>: Lorem ipsum dolor sit.</span></p>
              </div>
            </div>

          </div>


        </div>
        <div className="lower">

          <div className="description">Description</div>
          <div className="review">Review(24)</div>
        </div>

      </div>


    </div>
  )
}

export default ProductDetails
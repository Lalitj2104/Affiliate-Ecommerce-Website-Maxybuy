import React from 'react'
import './CartContainer.css'
const CartItem = () => {
    return (
        <div className="item-detail">
            <div className="img-title">
                <div className="item-img">
                    <img src="" alt="" />
                </div>
                <div className="item-title">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="item-price">
                <span>₹34</span>
            </div>
            <div className="item-quantity">
                2
            </div>
            <div className="item-total">
                <span>₹45</span>
            </div>
            <div className="item-remove"><span>X</span></div>
        </div>
    )
}

export default CartItem
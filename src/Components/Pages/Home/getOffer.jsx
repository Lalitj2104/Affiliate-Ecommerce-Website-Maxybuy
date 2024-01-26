import React from 'react'
import './getOffer.css'
import exImg from '../../../assets/exclusive_image.png'
import arrow from '../../../assets/arrow.png'

const GetOffer = () => {
  return (

    <section className="get-offer-section">
      <div className="get-offer">
        <div className="offer">
          <h1>Get <br />Exclusive <br /> Offers</h1>
          <button>Check Now  <img src={arrow} alt="" /></button>
         
        </div>
        <div className="ex-img">
          <img src={exImg} alt="exclusive offer img" />
        </div>
        
      </div>
    </section>
  )
}

export default GetOffer
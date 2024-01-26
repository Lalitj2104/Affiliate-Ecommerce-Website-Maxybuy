import React from 'react'
import './home.css'
import heroImage from '../../../assets/hero_image.png'
import arrow from '../../../assets/arrow.png'
import HomeSection from './homeSection'
import GetOffer from './getOffer'
import data_product from '../../../assets/data'
import new_collections from '../../../assets/new_collections'

const Home = () => {
  console.log(data_product)
  return (<>
 
    <section className='hero-section'>
     
    
    

      <div className="hero">
        <div className="hero-left">
          <div className="slogan">
            <h1>Evevate Your Style</h1>
          </div>
          <div className="slogan-description">
            <h1>New <br />Collections <br />for Everyone</h1>
          </div>

          <div className="go-latest">
            <button>Latest Collectons <img src={ arrow} alt="arrow" /></button>
          </div>


        </div>

        <div className="hero-right">
          <img className='hero-img' src={heroImage} alt="hero-img" />

        </div>

       
      </div>
      <HomeSection headerName={'POPUAR IN WOMEN'} data_product={data_product}></HomeSection>
      <GetOffer></GetOffer>
      <HomeSection headerName={'NEW COLLECTIONS'} data_product={new_collections}></HomeSection>

    </section>


 
  </>


  )
}

export default Home
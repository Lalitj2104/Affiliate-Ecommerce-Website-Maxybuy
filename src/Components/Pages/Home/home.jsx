import React from 'react'
import heroImage from '../../../assets/hero_image.png'
import arrow from '../../../assets/arrow.png'
import HomeSection from './homeSection'
import GetOffer from './getOffer'
import data_product from '../../../assets/data'
import new_collections from '../../../assets/new_collections'

const Home = () => {
  console.log(data_product)
  return (<>

    <section className='full-page-section bg-slate-500'>

      <div className="centre-page-section h-[900px]">
        <div className="hero-left h-2/5 flex flex-col justify-around pl-[50px]">
          <div>
            <h1 className='text-[#2e2626]'>Evevate Your Style</h1>
          </div>
          <div >
            <h1 className='text-[60px]'>New <br />Collections <br />for Everyone</h1>
          </div>

          <div className="go-latest w-full m-auto">
            <button className=' text-[25px] cursor-pointer h-[50px] font font-bold rounded-md px-[10px] text-white border-solid border-2  border-white bg-[#08051f]'>Latest Collectons <img src={arrow} alt="arrow" /></button>
          </div>


        </div>

        <div className=" h-3/5 w-2/5  flex items-center justify-center ">
          <img className='w-full' src={heroImage} alt="hero-img" />

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
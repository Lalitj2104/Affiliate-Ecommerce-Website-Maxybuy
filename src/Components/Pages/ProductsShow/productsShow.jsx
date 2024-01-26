
import { useContext } from 'react'

import './productsShow.css'
import { StoreContext } from '../../Store/storeContext'
import Item from '../../Item/item'



const ProductsShow = ({banner, category}) => {
  const { all_product} = useContext(StoreContext)
   
  let countMenProduct=0;
  all_product.map((e) => {
    if(e.category==='men'){
      countMenProduct++;
    }
 
  })


  return (
    <section className='productsShow-section'>
      <div className="productsShow">

        <div className="banner">
          <img src={banner} alt="" />
          <div className="sort-by">
            <p><span>Showing{`${1}-${countMenProduct} `}</span>Out of 54 Products </p>
            
            <select name="Men" id="mens">
              <option defaultValue="sort-by"  hidden>Sort by</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="5000">5000</option>
            </select>
          </div>
        </div>

        <div className="prducts">
           
          {all_product.map((e,index)=> {
            if(e.category===category){
            return  <Item key={e.id} id={e.id} name={e.name} image={e.image} newPrice={e.new_price} oldPrice={e.old_price}></Item>
            }
          })}

        </div>
      </div>
      

    </section>
  )
}

export default ProductsShow
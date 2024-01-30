import React from 'react'
import './homeSection.css'
import Item from '../../Item/item'
const HomeSection = ({ headerName,data_product}) => {
    return (
        <section className='product-1-section'>
            <div className="popular-products">
                <div className="popular-in-women-header">
                    <h1>{headerName}</h1>
                    <hr />
                </div>

                <div className="women-prodcuts">
                    {data_product.map ((e,idx)=> <Item id={e.id} name={e.name} image={e.image} newPrice={e.new_price} oldPrice={e.old_price} off={e.off}></Item>)}
                </div>
                

            </div>
        </section>
    )
}

export default HomeSection
import React from 'react'
import ProductsShow from '../ProductsShow/productsShow'
import AllImgList from '../../../assets/all_img_list'
function Men() {
  return ( <ProductsShow banner = {AllImgList.bannerMens} category={'men'}/>
  )
}

export default Men
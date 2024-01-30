import React, { useContext, useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { StoreContext } from '../Store/storeContext'
import AllImgList from '../../assets/all_img_list'
const Header = () => {

  const { menu, setMenuState,items } = useContext(StoreContext)
  return (
    <header className='d'>
      <div className='navbar px-5'>
        <NavLink to='/' onClick={() => setMenuState('shop')} className='logo'>Logo</NavLink>
        <ul className='nav-links sm:visible  invisible'>
          <li><NavLink to='/' onClick={() => setMenuState('shop')} href="#">Shop</NavLink> {menu === 'shop' ? <hr /> : ""}</li>
          <li><NavLink to='men' onClick={() => setMenuState('men')} href="#">Men</NavLink>  {menu === 'men' ? <hr /> : ""}</li>
          <li><NavLink to='women' onClick={() => setMenuState('women')} href="#">Women</NavLink> {menu === 'women' ? <hr /> : ""}</li>
          <li><NavLink to='kids' onClick={() => setMenuState('kids')} href="#">Kids</NavLink> {menu === 'kids' ? <hr /> : ""}</li>
          <li><NavLink to='about' onClick={() => setMenuState('about')} href="#">About</NavLink> {menu === 'about' ? <hr /> : ""}</li>

        </ul>

        <div className="login-sign-up s sm:gap-14  ">
          <NavLink onClick={() => setMenuState('login')} to='login' className='login h-9'>Login</NavLink>


          <NavLink to='cartContainer' className="cart ">
            <span className='countItem'>{items.length}</span>
            <img src={AllImgList.cartIcon} alt="cart img" />
          </NavLink>

        </div>
      </div>
    </header>


  )
}

export default Header



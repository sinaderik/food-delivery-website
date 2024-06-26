import React, { useRef } from 'react'
import logo from '../../assets/images/res-logo.png'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'

export default function Header() {

  const nav__link = [
    {
      display: "Home",
      path: "/home"
    },
    {
      display: "Foods",
      path: "/foods"
    },
    {
      display: "Cart",
      path: "/cart"
    },
    {
      display: "Contact",
      path: "/contact"
    },
  ]

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__link.map((item, index) => (
                  <NavLink
                    className={navClass => navClass.isActive ? "active__menu" : ""}
                    key={index}
                    to={item.path}
                  >
                    {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

          {/* ======= nav right icons ======= */}

          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <i className="ri-shopping-cart-line"></i>
              <span className='cart__badge'>2</span>
            </span>
            <span className='user'>
              <Link to='/login'><i className="ri-user-fill"></i></Link>
            </span>
            <span className='mobile__menu' onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>

        </div>
      </Container>
    </header>
  )
}

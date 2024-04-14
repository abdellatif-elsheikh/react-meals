import React from 'react'
import styles from './Navbar.module.css'
import NavbarCartButton from './NavbarCartButton'

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <h2>
        React Meals
      </h2>
      <NavbarCartButton onClick={props.onShowCart}/>
    </nav>
  )
}

export default Navbar
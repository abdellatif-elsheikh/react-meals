import React from 'react'
import styles from './Header.module.css'
import Navbar from './Navbar/Navbar'

import image1 from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <header>
        <Navbar onShowCart={props.onShowCart}/>
        <div className={styles["main-image"]}>
            <img src={image1} alt="a table full of delicious food" />
        </div>
    </header>
  )
}

export default Header
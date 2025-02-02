import { useContext, useEffect, useState } from "react";
import styles from "./NavbarCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const NavbarCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`


  useEffect(() => {
    if(items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    setTimeout(() => {
      setBtnIsHighlighted(false)
    },300)
  },[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default NavbarCartButton;

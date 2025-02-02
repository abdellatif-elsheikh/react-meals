import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <h3 className={styles.description}>{props.description}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;

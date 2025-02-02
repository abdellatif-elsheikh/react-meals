import styles from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredAmount = +amountInputRef.current.value
    if(enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false)
      return;
    }
    setAmountIsValid(true)
    props.onAddToCart(enteredAmount)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
        label='Amount' 
        input={{
        id: 'amount_'+props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
        <button>+ Add</button>
        {!amountIsValid && <p style={{color: 'rgb(150, 40, 90)'}}>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
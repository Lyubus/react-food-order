import { useRef, useState } from 'react';
import clsses from './MealItemForm.module.css';
import Input from './../../UI/Input';

const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        
        props.onAddToCart(enteredAmount);
    }

    return <form className={clsses.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}></Input>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
}

export default MealItemForm;
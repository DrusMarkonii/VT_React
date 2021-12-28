import React, {useState} from 'react';
import './style.css'

function ListItem(props) {
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(0)

    const handelClick = () => {

        setChecked(!checked)

        if (props.isCounter === "true" && !checked) {
            setCount(1)
            props.onCheckIngredient(!checked, props.ingredientName, count + 1)

        } else if (props.isCounter === "true" && checked) {
            setCount(0);
            props.onCheckIngredient(!checked, props.ingredientName, count)
        }
        else {
            !checked ? 
            props.onCheckIngredient(!checked, props.ingredientName, count + 1) : 
            props.onCheckIngredient(!checked, props.ingredientName, count) 
        }

    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            props.onCheckIngredient(checked, props.ingredientName, count - 1);
        }

    }

    const increment = () => {
       if (count < 10 && count >= 1) {
        setCount(count + 1);
        props.onCheckIngredient(checked, props.ingredientName, count + 1);
       }

    }

   return (
        <div className='product-list'>
            {props.ingredientName}
            <input type="checkbox" checked={checked} onChange={handelClick} />
            {props.isCounter === "true" ? 
                <div className='control-panel'>
                    <button className='btn btn-decrement' onClick={decrement}>-</button>
                    <span> {count} </span>
                    <button className='btn btn-increment' onClick={increment}>+</button>
                </div>: 
                null}
        </div>
   )
}
export default ListItem
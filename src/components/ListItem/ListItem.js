import React, {useState} from 'react';
import './style.css'

function ListItem(props) {
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(1)

    const handelClick = () => {
        setChecked(!checked)

        props.onCheckIngredient(!checked, props.ingredientName, count)
        
        
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
            props.onCheckIngredient(checked, props.ingredientName, count - 1)
        }

    }

    const increment = () => {
       if (count < 10) {
        setCount(count + 1)
        props.onCheckIngredient(checked, props.ingredientName, count + 1)
       }

    }

   return (
        <div className='product-list'>
            {props.ingredientName}
            <input type="checkbox" checked={checked} onChange={handelClick} />
            {checked ? 
                <div className='control-panel'>
                    <button onClick={decrement}>-</button>
                    <span> {count} </span>
                    <button onClick={increment}>+</button>
                </div>: 
                null}
        </div>
   )
}
export default ListItem
import React, {useState} from 'react';
import './style.css'

function ListItem(props) {
    const [checked, setChecked] = useState(false);

    const handelClick = () => {
        setChecked(!checked)

        props.onCheckIngredient(!checked, props.ingredientName)
        
        
    }

   return (
        <div>
            {props.ingredientName}
            <input type="checkbox" checked={checked} onChange={handelClick} />
        </div>
   )
}
export default ListItem
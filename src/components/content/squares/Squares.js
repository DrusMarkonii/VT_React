import React, {useState} from 'react';
import './style.css'

function Squares() {
    const [visibility, setVisibility] = useState({
        redSquares: true,
        greenSquares: true
    })

    function handlerClick(e) {
        const target = e.target

        target.style="color: white"
        
    }
    

    return (
        <div className='squares'>
           <div onClick={handlerClick} className='squares red-square '>

           </div>
           <div  onClick={handlerClick} className='squares green-square '>

           </div>
        </div>
    )
}

export default Squares
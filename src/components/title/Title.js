import React from 'react';
import './style.css'

function Title(props) {
    const title = props.title

    return (
        <div className='title'>
             <h2>{document.title = title}</h2>
        </div>
    )
}

export default Title
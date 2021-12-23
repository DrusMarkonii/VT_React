import React from 'react';
import './style.css'

function Nav(props) {
    const sections = props.sections

    return (
        <div className='nav'>
            <ul className='nav-list'>
                {sections.map((item, index ) => <li key={index + 1}><a key={index} href={item.link}>{item.title}</a></li>)}
            </ul>
        </div>
    )
}

export default Nav
import React, { useState } from 'react';
import Popup from './Popup.js';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

const Content = (props) => { 

    const [showPopup, setShowPopup] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);

    const togglePopup = (element) => { 
        if (!showPopup) {
            setCurrentElement(element);
        } else {
            setCurrentElement(null)
        }
        setShowPopup(!showPopup);
    }

    return (
        <div>
            <h2>{props.title}</h2>
            {props.items.map(element => {
                return (
                    <div key={'div-' + element.id} className="card-item" onClick={e => togglePopup(element)}>
                        <img src={PUBLIC_URL + element.src} key={'img-' + element.id} alt={element.title}/>
                        <span>{element.title}</span>
                        <span>{element.price + "€"}</span>
                    </div>
                )
            })}

            {showPopup ? <Popup element={currentElement} togglePopup={togglePopup}/> : null}
        </div>
    )


}

export default Content;
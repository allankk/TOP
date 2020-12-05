import React, { useState, preventDefault } from 'react';


const NumberOfCards = (props) => {
    const [number, setNumber] = useState(props.totalCards);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTotalCards(number);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="number-input">Number of cards to play with</label>
            <input type="number" id="number-input" min="1" max="27" value={number} onChange={e => setNumber(e.target.value)}/>
            <input type="submit" id="submit-button"/>
        </form>
    );
}

export default NumberOfCards;
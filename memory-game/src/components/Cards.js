import React, { useState } from 'react';
import allImages from './Images';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

const Cards = (props) => {

    let fullArray = [...allImages];
    let playArray = [];

    // select cards to be played by choosing random items
    function iterate(oldArray, newArray, i) {
        let randomIndex = Math.floor(Math.random() * oldArray.length);

        newArray.push(oldArray[randomIndex]);
        oldArray.splice(randomIndex, 1);

        if (i <= 1) {
            return
        } else {
            i = i - 1;
            iterate(oldArray, newArray, i);
        }
    };

    iterate(fullArray, playArray, props.cardAmount);

    // assign the cardarray to the state
    const [cardArray, setCardArray] = useState(playArray);

    // useEffect(() => {

    
    // });

    const checkIfClicked = (id) => {
        let newArray = [...cardArray];
        
        // go through the array. if element is not clicked, set clicked to true. If it is clicked, end the game.
        for(let i=0; i<newArray.length; i++) {
            if (newArray[i].id === id) {
                if (!newArray[i].clicked) {
                    newArray[i].clicked = true;
                    break;
                } else {
                    // start new game, turn all clicked attributes to false
                    for (let j=0; j<newArray.length; j++) {
                        newArray[i].clicked = false;
                        console.log('loop');
                    }
                    break;
                } 
            }
        }

        setCardArray(newArray);
    }

    return (
        <div className='cards'>
            {playArray.map(element => {
                return (
                    <div key={'div-' + element.id} className='card-item' onClick={e => {checkIfClicked(element.id)}} >
                        <img src={PUBLIC_URL + element.src} key={'img-' + element.id} alt={element.title}/>
                    </div>
                )
            })};
     
        </div>
    
    
    )

}

export default Cards;
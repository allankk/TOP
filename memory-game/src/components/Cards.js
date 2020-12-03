import React, { useState, useEffect } from 'react';
import allImages from './Images';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

let fullArray = [...allImages];
let playArray = [];

// select cards to be played by choosing random items
const iterate = (i) => {
    
    let randomIndex = Math.floor(Math.random() * fullArray.length);

    playArray.push(fullArray[randomIndex]);
    fullArray.splice(randomIndex, 1);

    if (i <= 1) {
        return
    } else {
        i = i - 1;
        iterate(i);
    }
};

const getNewArray = (i) => {
    fullArray = [...allImages];
    playArray = [];

    console.log('getting new array');

    iterate(i);    
};

// TODO: FIX. how get into component to run only once
getNewArray(25);

const Cards = (props) => {

    getNewArray(props.cardAmount);

    // assign the cardarray to the state
    const [cardArray, setCardArray] = useState(playArray);
    const [count, setCount] = useState(0);

    useEffect(() => {
        props.setCurrentScore(count);

    }, [count, props]);
    
    const checkIfClicked = (id) => {
        let newArray = [...cardArray];
        
        // go through the array. if element is not clicked, set clicked to true. If it is clicked, end the game.
        for(let i=0; i<newArray.length; i++) {
            if (newArray[i].id === id) {
                if (!newArray[i].clicked) {
                    newArray[i].clicked = true;
                    setCount(count + 1)
                    break;
                } else {
                    // start new game, turn all clicked attributes to false
                    for (let j=0; j<newArray.length; j++) {
                        newArray[i].clicked = false;
                    }
                    // get new images for a new game
                    getNewArray();
                    setCount(0);
                    break;
                } 
            }
        }

        setCardArray(newArray);
    }

    console.log(playArray);

    return (
        <div className='cards'>
            {playArray.map(element => {
                return (
                    <div key={'div-' + element.id} className='card-item' onClick={e => {checkIfClicked(element.id)}} >
                        <img src={PUBLIC_URL + element.src} key={'img-' + element.id} alt={element.title}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;
import React, { useState, useEffect } from 'react';
import allImages from './Images';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

let fullArray;
let playArray;
let useEffectCalled = false;

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

// create a new array of images to be played
const getNewArray = (i) => {
    fullArray = [...allImages];
    playArray = [];

    fullArray.forEach(element => {
        element.clicked = false;
    });

    iterate(i);
};

// Custom hook to use a constructor for a functional component. This runs only once before rendering.
const useConstructor = (callBack = () => {}) => { 
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    setHasBeenCalled(true);
}

// shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let x = array[j];
        array[j] = array[i];
        array[i] = x;
    }
}

const Cards = (props) => {

    useConstructor(() => {
        getNewArray(props.cardAmount);
    });

    // assign the cardarray to the state
    const [cardArray, setCardArray] = useState([...playArray]);

    useEffect(() => {
        if (!useEffectCalled){
            useEffectCalled = true;
        } else {
            getNewArray(props.cardAmount);
            setCardArray([...playArray]);
        }
    }, [props.cardAmount])

    const checkIfClicked = (id) => {
        // go through the array. if element is not clicked, set clicked to true. If it is clicked, end the game.
        for(let i=0; i<playArray.length; i++) {
            if (playArray[i].id === id) {
                if (!playArray[i].clicked) {
                    playArray[i].clicked = true;
                    props.setCurrentScore(props.currentScore + 1);
                    shuffleArray(playArray);
                    setCardArray([...playArray]);
                    break;
                } else {
                    console.log('GAME LOST');
                    // get new images for a new game
                    getNewArray(props.cardAmount);
                    setCardArray([...playArray]);
                    props.setCurrentScore(0);
                    break;
                } 
            }
        }   

        if (props.cardAmount == props.currentScore) {
            console.log('YOU WON');
            getNewArray(props.cardAmount);
            setCardArray([...playArray]);
            props.setCurrentScore(0);
        }
    }

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
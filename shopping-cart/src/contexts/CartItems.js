import React, { useEffect, useState } from 'react';

import {CartItems} from '../App';

const CartItemsProvider = (props) => {

    const [addedItems, setAddedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState('0')

    useEffect(() => {
        let tempTotal = 0;

        addedItems.forEach(element => {
            console.log(element.title + ": " + element.amount);
            tempTotal = tempTotal + element.price * element.amount;
        })

        let roundTotal = Math.round(tempTotal * 100) / 100;
        roundTotal = roundTotal.toFixed('2');

        setTotalPrice(roundTotal);
    }, [addedItems]);

    const addItem = (item) => {
        let tempArray = [...addedItems];
        let itemFound = false;

        tempArray.forEach(element => {
            if (element.id === item.id) {
                element.amount++;
                itemFound = true;
                setAddedItems(tempArray);
            }
        })
        
        if (!itemFound){
            item.amount = 1;
            tempArray.push(item);
            setAddedItems(tempArray)
        }    
    }

    const removeItem = (item) => {
        let tempArray = [...addedItems];

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === item.id) {
                tempArray.splice(i, 1);
                break;
            }
        }

        setAddedItems(tempArray);
    };

    const incrementItem = (item) => {
        let tempArray = [...addedItems];

        tempArray.forEach(element => {
            if (element.id === item.id) {
                element.amount++;
            }
        })
        setAddedItems(tempArray);
    }

    const decrementItem = (item) => {
        let tempArray = [...addedItems];

        tempArray.forEach(element => {
            if (element.id === item.id) {
                if (element.amount > 0) {
                    element.amount--;
                }
            }
        })
        setAddedItems(tempArray);
    }

    const setItemAmount = (item, amount) => {
        let tempArray = [...addedItems];

        tempArray.forEach(element => {
            if (element.id === item.id) {
                if (element.amount < 0) {
                    element.amount = 0;
                } else {
                    element.amount = amount;
                }
            }
        })

        setAddedItems(tempArray);
    }

    const getItemAmount = (item) => {
        let tempArray = [...addedItems];
        let tempAmount = 0;

        tempArray.forEach(element => {
            if (item.id === element.id) {
                tempAmount = element.amount;
            }
        })

        return tempAmount;
    }

    const contextValues = {
        addItem,
        addedItems,
        removeItem,
        incrementItem,
        decrementItem,
        setItemAmount,
        totalPrice,
        getItemAmount
    };

    return (
        <CartItems.Provider value={contextValues}>
            {props.children}
        </CartItems.Provider>
    )
}

export default CartItemsProvider;
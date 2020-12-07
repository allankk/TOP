import React, {useEffect, useState} from 'react';

import {CartItems} from '../App';

const CartItemsProvider = (props) => {

    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        console.log('items changed');
    }, [addedItems])

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
            setAddedItems(tempArray);
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
        console.log('setting item amount');
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

    const contextValues = {
        addItem,
        addedItems,
        removeItem,
        incrementItem,
        decrementItem,
        setItemAmount
    };

    return (
        <CartItems.Provider value={contextValues}>
            {props.children}
        </CartItems.Provider>
    )
}

export default CartItemsProvider;
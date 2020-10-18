const pageMenu = () => {

    const pageContainer = document.createElement('div');
    pageContainer.setAttribute('class', 'main d-flex flex-column justify-content-center align-items-center');
    pageContainer.setAttribute('id', 'menu-container');

    const menuFood = document.createElement('div');
    menuFood.setAttribute('class', 'main-content menu');

    const menuFoodHeader = document.createElement('div');
    menuFoodHeader.setAttribute('class', 'menu-header');
    menuFoodHeader.innerHTML = "FOOD MENU";
    menuFood.appendChild(menuFoodHeader);

    const menuFoodList = document.createElement('div');

// FOOD ITEMS

    function createFoodItem(name, price) {
        let foodItem = document.createElement('div');
        foodItem.setAttribute('class', 'd-flex flex-row menu-item');
        menuFoodList.appendChild(foodItem);

        let foodItemName = document.createElement('div');
        foodItemName.setAttribute('class', 'w-50');
        foodItemName.innerHTML = name;
        foodItem.appendChild(foodItemName)

        let foodItemPrice = document.createElement('div');
        foodItemPrice.setAttribute('class', 'w-50 menu-price');
        foodItemPrice.innerHTML = price;
        foodItem.appendChild(foodItemPrice);
    }

    createFoodItem('Cheeseburger', '5.50');
    createFoodItem('Blue Cheese Burger', '6.00');
    createFoodItem('Fries', '3.00');
    createFoodItem('Sweet Potato Fries', '3.50');
    createFoodItem('Avocado Salad', '4.00');

    menuFood.appendChild(menuFoodList);


    // DRINKS

    const menuDrinks = document.createElement('div');
    menuDrinks.setAttribute('class', 'main-content menu');

    const menuDrinkHeader = document.createElement('div');
    menuDrinkHeader.setAttribute('class', 'menu-header');
    menuDrinkHeader.innerHTML = "DRINK MENU";
    menuDrinks.appendChild(menuDrinkHeader);

    const menuDrinkList = document.createElement('div');

    function createDrinkItem(name, price) {
        let drinkItem = document.createElement('div');
        drinkItem.setAttribute('class', 'd-flex flex-row menu-item');
        menuDrinkList.appendChild(drinkItem);

        let drinkItemName = document.createElement('div');
        drinkItemName.setAttribute('class', 'w-50');
        drinkItemName.innerHTML = name;
        drinkItem.appendChild(drinkItemName)

        let drinkItemPrice = document.createElement('div');
        drinkItemPrice.setAttribute('class', 'w-50 menu-price');
        drinkItemPrice.innerHTML = price;
        drinkItem.appendChild(drinkItemPrice);
    }

    createDrinkItem('Coke, Fanta, Sprite', '2.50');
    createDrinkItem('Beer', '4.50');
    createDrinkItem('Juice', '2.00');
    createDrinkItem('Wine', '3.50');

    menuDrinks.appendChild(menuDrinkList);


    pageContainer.appendChild(menuFood);
    pageContainer.appendChild(menuDrinks);

    // Append to HTML page
    document.getElementById('content').appendChild(pageContainer);
}

function clearMenu() {
    let menu = document.getElementById('menu-container')
    
    menu.parentNode.removeChild(menu);
}



export { pageMenu, clearMenu };
import { getWeather } from './getWeather.js';

const addSearchListener = () => {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const error = document.querySelector('.error');


    searchBtn.addEventListener('click', () => {
        removeErrors();

        // if search is invalid, return an error.
        if (searchInput.value == '') {
            console.log(error);
            error.innerHTML = "Search input is empty";
            error.setAttribute('class', 'error show');      
        } else {
            // replace spaces with + to accurately search API.
            const inputValue = (searchInput.value).replace(/ /g,"+");

            getWeather(inputValue);
        }
    });
}


// remove errors
const removeErrors = () => {
    const error = document.querySelector('.error');

    error.setAttribute('class', 'error');
}


export { removeErrors, addSearchListener }
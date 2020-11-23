import { getWeather } from "./getWeather";
import { addSearchListener } from "./navigation";

const createWeatherItem = (weather) => {

    createDOM(weather);

}



const createDOM = (weather) => {

    const weatherItem = document.createElement('div');
    const weatherType = getWeatherType(weather);
    weatherItem.setAttribute('class', `weather-item ${weatherType}`);

    // add navigation buttons and event listeners
    const changeBar = document.createElement('div');
    changeBar.setAttribute('class', 'change-bar');
    weatherItem.appendChild(changeBar);
    
    addBarListener(weatherItem, changeBar);

    const syncBtn = document.createElement('i');
    syncBtn.setAttribute('class', 'fa fa-sync');
    changeBar.appendChild(syncBtn);

    const deleteBtn = document.createElement('i');
    deleteBtn.setAttribute('class', 'fa fa-times');
    changeBar.appendChild(deleteBtn);

    addBtnListeners(weather, weatherItem, syncBtn, deleteBtn);

    // get the icon based on weather, placeholder for now
    const main = document.createElement('div');
    main.setAttribute('class', 'weather-icon');
    weatherItem.appendChild(main);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', `icons/${weather.icon}.png`)
    main.appendChild(weatherIcon);

    // get the city, country and weather description
    const city = document.createElement('div');
    city.setAttribute('id', 'city');
    city.innerHTML = weather.place;
    weatherItem.appendChild(city);

    const country = document.createElement('div');
    country.setAttribute('id', 'country');
    country.innerHTML = weather.country;
    weatherItem.appendChild(country);

    const description = document.createElement('div');
    description.setAttribute('class', 'description');
    description.innerHTML = weather.description;
    weatherItem.appendChild(description);

    // CONTENT LINE 1
    const firstContent = document.createElement('div');
    firstContent.setAttribute('class', 'content');
    weatherItem.appendChild(firstContent);

    // temperature
    const firstContent_item_1 = document.createElement('div');
    firstContent_item_1.setAttribute('class', 'item-container');
    firstContent.appendChild(firstContent_item_1);

    const tempSpan = document.createElement('span');
    tempSpan.setAttribute('id', 'temp');
    tempSpan.innerHTML = `${weather.temp}°C`;
    firstContent_item_1.appendChild(tempSpan);

    const tempTitle = document.createElement('span');
    tempTitle.innerHTML = '<br>Temp.';
    firstContent_item_1.appendChild(tempTitle);

    // feels like
    const firstContent_item_2 = document.createElement('div');
    firstContent_item_2.setAttribute('class', 'item-container');
    firstContent.appendChild(firstContent_item_2);

    const feelsSpan = document.createElement('span');
    feelsSpan.setAttribute('id', 'feels-like');
    feelsSpan.innerHTML = `${weather.feels_like}°C`;
    firstContent_item_2.appendChild(feelsSpan);

    const feelsTitle = document.createElement('span');
    feelsTitle.innerHTML = '<br>Feels like';
    firstContent_item_2.appendChild(feelsTitle);

    // wind speed
    const firstContent_item_3 = document.createElement('div');
    firstContent_item_3.setAttribute('class', 'item-container icon');
    firstContent.appendChild(firstContent_item_3);

    const windArrow = document.createElement('i');
    const windDirection = getWindDirection(weather.wind_deg);
    windArrow.setAttribute('class', `wind-arrow fa fa-location-arrow ${windDirection}`);
    firstContent_item_3.appendChild(windArrow);

    const windSpeed = document.createElement('span');
    windSpeed.setAttribute('id', 'wind-speed');
    windSpeed.innerHTML = `${weather.wind_speed} m/s`;
    firstContent_item_3.appendChild(windSpeed);

    // CONTENT LINE 2
    const secondContent = document.createElement('div');
    secondContent.setAttribute('class', 'content');
    weatherItem.appendChild(secondContent);

    // sunrise
    const secondContent_item_1 = document.createElement('div');
    secondContent_item_1.setAttribute('class', 'item-container');
    secondContent.appendChild(secondContent_item_1);

    const sunriseSpan = document.createElement('span');
    sunriseSpan.setAttribute('id', 'sunrise');
    sunriseSpan.innerHTML = `${weather.sunrise}`;
    secondContent_item_1.appendChild(sunriseSpan);

    const sunriseTitle = document.createElement('span');
    sunriseTitle.innerHTML = '<br>Sunrise';
    secondContent_item_1.appendChild(sunriseTitle);

    // sunrise
    const secondContent_item_2 = document.createElement('div');
    secondContent_item_2.setAttribute('class', 'item-container');
    secondContent.appendChild(secondContent_item_2);

    const sunsetSpan = document.createElement('span');
    sunsetSpan.setAttribute('id', 'sunset');
    sunsetSpan.innerHTML = `${weather.sunset}`;
    secondContent_item_2.appendChild(sunsetSpan);

    const sunsetTitle = document.createElement('span');
    sunsetTitle.innerHTML = '<br>Sunset';
    secondContent_item_2.appendChild(sunsetTitle);

    // humidity
    const secondContent_item_3 = document.createElement('div');
    secondContent_item_3.setAttribute('class', 'item-container icon');
    secondContent.appendChild(secondContent_item_3);

    const humidityIcon = document.createElement('i');
    humidityIcon.setAttribute('class', 'fa fa-water');
    secondContent_item_3.appendChild(humidityIcon);

    const humidity = document.createElement('span');
    humidity.setAttribute('id', 'humidity');
    humidity.innerHTML = `${weather.humidity}%`;
    secondContent_item_3.appendChild(humidity);

    const weatherContent = document.getElementById("weather-content");
    weatherContent.appendChild(weatherItem);
}

// Turn wind degrees into a directional string
const getWindDirection = (deg) => {
    let array = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west', 'north'];

    let division = Math.floor(deg/45);
    if (deg % 45 < 22.5) {
        return array[division];
    } else {
        return array[division+1];
    }
}

// Formats the weather type for further use.
const getWeatherType = (weather) => {
    let weatherType = (weather.main).toLowerCase();

    if (weatherType == 'clouds') {
        weatherType = (weather.description).replace(/ /g, "-");
    }

    return weatherType;
};

// add listeners for weather item
const addBarListener = (weatherItem, changeBar) => {

    weatherItem.addEventListener('mouseover', () => {
        changeBar.setAttribute('class', 'change-bar show');
    })

    weatherItem.addEventListener('mouseout', () => {
        changeBar.setAttribute('class', 'change-bar');
    })
};

// add event listeners for sync and delete buttons
const addBtnListeners = (weather, weatherItem, syncBtn, deleteBtn) => {

    syncBtn.addEventListener('click', () => {
        // weatherItem.parentNode.removeChild(weatherItem);
        getWeather((weather.place).replace(/ /g, '+'), weatherItem);
    })

    deleteBtn.addEventListener('click', () => {
        let JSONArray = JSON.parse(localStorage.getItem('weather_app'));

        for (let i = 0; i < JSONArray.length; i++) {
            if (JSONArray[i].place == weather.place) {
                JSONArray.splice(i, 1);
            }
        }

        localStorage.setItem('weather_app', JSON.stringify(JSONArray));
        weatherItem.parentNode.removeChild(weatherItem);
    })


};


export { createWeatherItem, getWeatherType, getWindDirection };
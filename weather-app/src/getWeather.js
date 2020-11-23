import packageInfo from './country_codes.json';
import { createWeatherItem } from './weatherItem.js';
import { removeErrors } from './navigation.js';
import { getWeatherType, getWindDirection } from './weatherItem.js';

const URLSTART = 'https://api.openweathermap.org/data/2.5/weather?q=';
const URLEND = '&appid=ccc5bdcd6b167bc37faefb623abeb33b';


// get weather information from openweathermap api, then use that information in logResponse()
const getWeather = (location, weatherItem) => {
    const fullURL = URLSTART + location + URLEND;

    fetch(fullURL, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            logResponse(response, weatherItem);
        })
        .catch(function(response) {
            console.log(response);
            const error = document.querySelector('.error');
            error.innerHTML = "Could not retrieve information";
            error.setAttribute('class', 'error show');          
        })
}

// create a json object with necessary information.
const logResponse = (response, weatherItem) => {
    // create json object
    let weather = {}

    weather.place = response.name;
    weather.feels_like = Math.round(response.main.feels_like - 273.15);
    weather.temp = Math.round(response.main.temp - 273.15);
    weather.sunrise = timeConverter(response.sys.sunrise);
    weather.sunset = timeConverter(response.sys.sunset);
    weather.humidity = response.main.humidity;
    weather.description = response.weather[0].description;
    weather.main = response.weather[0].main;
    weather.wind_deg = response.wind.deg;
    weather.wind_speed = Math.round(response.wind.speed * 10) / 10;
    weather.icon = response.weather[0].icon;

    // get the country from imported JSON file
    let countryCode = response.sys.country;

    // search for a country code to match a country name
    for(let i = 0; i < packageInfo.length; i++) {
        if (packageInfo[i].Code == countryCode) {
            weather.country = packageInfo[i].Name;
            break;
        }
    }

    // parse localStorage information
    let JSONArray = JSON.parse(localStorage.getItem('weather_app'));

    // sync localStorage information
    let isExisting = false;

    JSONArray.forEach(element => {
        if (element.place == response.name) {
            element = weather;
            isExisting = true;
        }
    })

    if (!isExisting) {
        JSONArray.push(weather);
    }

    localStorage.setItem(`weather_app`, JSON.stringify(JSONArray));

    if (weatherItem) {
        syncWeather(weather, weatherItem);
    } else {
        createWeatherItem(weather);
    }
}

const syncWeather = (weather, weatherItem) => {
    // const item = weatherItem.querySelector('.weather-item');
    const weatherType = getWeatherType(weather);

    weatherItem.setAttribute('class', `weather-item ${weatherType}`);

    const backImg = weatherItem.querySelector('img');
    backImg.setAttribute('src', `icons/${weather.icon}.png`);

    const city = weatherItem.querySelector('#city');
    city.innerHTML = weather.place;

    const country = weatherItem.querySelector('#country');
    country.innerHTML = weather.country;

    const description = weatherItem.querySelector('.description');
    description.innerHTML = weather.description;

    const temp = weatherItem.querySelector('#temp');
    temp.innerHTML = `${weather.temp}°C`;

    const feelsLike = weatherItem.querySelector('#feels-like');
    feelsLike.innerHTML = `${weather.feels_like}°C`;

    const windArrow = weatherItem.querySelector('.wind-arrow');
    let direction = getWindDirection(weather.wind_deg);
    windArrow.setAttribute('class', `wind-arrow fa fa-location-arrow ${direction}`);

    const windSpeed = weatherItem.querySelector('#wind-speed');
    windSpeed.innerHTML = `${weather.wind_speed} m/s`;

    const sunrise = weatherItem.querySelector('#sunrise');
    sunrise.innerHTML = weather.sunrise;

    const sunset = weatherItem.querySelector('#sunset');
    sunset.innerHTML = weather.sunset;

    const humidity = weatherItem.querySelector('#humidity');
    humidity.innerHTML = `${weather.humidity}%`;

}



// convert time from unix format to HH:MM
function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let hour = a.getHours() < 10 ? '0' + a.getHours() : a.getHours();
    let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    let time = hour + ':' + min;
    return time;
}

export { getWeather };

import packageInfo from './country_codes.json';

const URLSTART = 'http://api.openweathermap.org/data/2.5/weather?q=';
const URLEND = '&appid=ccc5bdcd6b167bc37faefb623abeb33b';

// get weather information from openweathermap api, then use that information in logResponse()
const getWeather = (location) => {
    const fullURL = URLSTART + location + URLEND;

    console.log(fullURL);

    fetch(fullURL, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            logResponse(response);
        })
}

// create a json object with necessary information.
const logResponse = (response) => {
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
    weather.wind_speed = response.wind.speed;

    // get the country from imported JSON file
    let countryCode = response.sys.country;

    // search for a country code to match a country name
    for(let i = 0; i < packageInfo.length; i++) {
        if (packageInfo[i].Code == countryCode) {
            weather.country = packageInfo[i].Name;
            break;
        }
    }

    console.log(weather);
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

// openweathermap api key: ccc5bdcd6b167bc37faefb623abeb33b
// api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ccc5bdcd6b167bc37faefb623abeb33b

import { getWeather } from './getWeather.js'

const LOCATION = 'belo+horizonte'

function App() {

    getWeather(LOCATION);

}

App();
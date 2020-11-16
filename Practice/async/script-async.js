// openweathermap api key: ccc5bdcd6b167bc37faefb623abeb33b
// api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ccc5bdcd6b167bc37faefb623abeb33b

// giphy api key: 8KEGVlMVUDkRJo0m45A49fuBY8wCHZI4
// https://api.giphy.com/v1/gifs/translate?api_key=8KEGVlMVUDkRJo0m45A49fuBY8wCHZI4&s=hello

const searchGIF = (searchTerm) => {
    clearErrors();

    const url = 'https://api.giphy.com/v1/gifs/translate?api_key=8KEGVlMVUDkRJo0m45A49fuBY8wCHZI4&s='
    const input = document.getElementById('search');

    if (searchTerm) {
        getImage(`${url} + ${searchTerm}`);
    } else {
        getImage(`${url} + ${input.value}`)
    }
}

const getImage = (url) => {
    const img = document.querySelector('img');
// 
// 
// 
    async function getCats() {
        const response = await fetch(url, {mode: 'cors'});
        const catData = await response.json();
        img.src = catData.data.images.original.url;
    }

    getCats().catch(error => {
        console.log(error);
        const text = document.createElement('h2');
        text.innerHTML = "Could not find image or connect to API"

        img.parentNode.appendChild(text);
    })

//
//
//
};

const clearErrors = () => {
    const error = document.querySelector('h2');

    if (error != undefined || error != null) {
        error.parentNode.removeChild(error);
    }
}

searchGIF('hello');



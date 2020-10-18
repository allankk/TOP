const pageHome = () => {

    const home = document.createElement('div');

    // main container for content
    home.setAttribute('class', 'main d-flex flex-column justify-content-center align-items-center');
    home.setAttribute('id', 'home-container')

    // container for slogan
    const slogan = document.createElement('div');
    slogan.setAttribute('class', 'main-content');
    slogan.innerHTML = 'Tasty burgers! downtown! round the clock! <br> What else is there to say?';


    // container for address and opening times
    const address = document.createElement('div');
    address.setAttribute('class', 'main-content address d-flex flex-column');
    address.innerHTML = 'Peedi 20, Tallinn, Estonia';


    const time = document.createElement('div');
    time.setAttribute('class', 'main-content time d-flex flex-column');
    time.innerHTML = 'Mon-Thu: 10-21 <br> Fri-Sun: 10-02';


    home.appendChild(slogan);
    home.appendChild(address);
    home.appendChild(time);

    document.getElementById('content').appendChild(home);

}

function clearHome() {
    let home = document.getElementById('home-container');

    home.parentNode.removeChild(home);
    
};


export { pageHome, clearHome };
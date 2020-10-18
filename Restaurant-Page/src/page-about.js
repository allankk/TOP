const pageAbout = () => {

    const aboutContainer = document.createElement('div');

    // main container for content
    aboutContainer.setAttribute('class', 'main d-flex flex-column justify-content-center align-items-center');
    aboutContainer.setAttribute('id', 'about-container')

    // container for address and opening times
    const aboutContent = document.createElement('div');
    aboutContent.setAttribute('class', 'main-content address d-flex flex-column');
    aboutContainer.appendChild(aboutContent);

    const aboutHeader = document.createElement('div');
    aboutHeader.setAttribute('class', 'about-header');
    aboutHeader.innerHTML = 'ABOUT US';
    aboutContent.appendChild(aboutHeader);

    const aboutText = document.createElement('div');
    aboutText.setAttribute('class', 'about-text');
    aboutText.innerHTML = 'We are a small group of hard working gastronomy pioneers who all arrived onto this planet 25 to 30 years ago. We have started yet another restaurant in our steakhouse chain, making this the 17th restaurant around the globe in our franchise. <br> Come here, have a bite (or grab to go) and enjoy. <br> If you have any requests regarding the menu, let us know by writing to us or coming to chat with us. We will be waiting for you at Peedi street! '
    aboutContent.appendChild(aboutText);


    // IMAGES

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image-container d-flex align-items-center justify-content-center');

    function addImage(url) {
        let image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('class', 'about-image');

        imageContainer.appendChild(image);
    }

    addImage('./images/sample1.jpg');
    addImage('./images/sample2.jpg');
    addImage('./images/sample3.jpg');

    aboutContainer.appendChild(imageContainer);


    document.getElementById('content').appendChild(aboutContainer);
}

function clearAbout() {
    let about = document.getElementById('about-container');

    about.parentNode.removeChild(about);    
};


export { pageAbout, clearAbout };
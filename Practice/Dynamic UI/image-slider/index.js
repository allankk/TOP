// App gets images from /images folder. The names of the image files must be set to '1', '2' and on. Change the IMAGES constant for how many images there are


const initiatePlayBtn = () => {
    const playBtn = document.getElementById('button-playpause');

    const play = document.createElement('i');
    play.setAttribute('class', 'fa fa-play');

    playBtn.onclick = function() {
        if (play.classList.contains('fa-play')) {
            play.setAttribute('class', 'fa fa-pause');
        } else {
            play.setAttribute('class', 'fa fa-play');
        }
    }

    playBtn.appendChild(play);
};

const updateImage = (currentSlide) => {
    const image = document.getElementById('displayed-image');
    image.setAttribute('src', `images/${currentSlide}.jpg`);
    changeDot(currentSlide);
}

const initiateArrowBtn = (IMAGES) => {

    let currentSlide = 1;
    
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');

    leftArrow.onclick = function() {
        currentSlide -= 1;
        if (currentSlide < 1) {
            currentSlide = IMAGES;
        };

        updateImage(currentSlide);
    };

    rightArrow.onclick = function() {
        currentSlide += 1;
        if (currentSlide > IMAGES) {
            currentSlide = 1;
        };

        updateImage(currentSlide);
    };
};

const initiateKeys = () => {
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');

    document.addEventListener('keydown', event => {
        if (event.key == 'ArrowRight') {
            rightArrow.click();
        }

        if (event.key == 'ArrowLeft') {
            leftArrow.click();
        }
    });
};

const initiateDots = (IMAGES) => {
    const navDots = document.getElementById('nav-dots');
    const dotArray = [];

    for (let i = 1; i <= IMAGES; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('class', 'nav-dot');
        navDots.appendChild(dot);
        dotArray.push(dot);
    };
};

const changeDot = (currentSlide) => {
    const navDots = document.getElementById('nav-dots').childNodes;
    
    for (let i = 1; i < navDots.length; i++) {
        if (i == currentSlide) {
            navDots[i].setAttribute('class', 'nav-dot selected');
        } else {
            navDots[i].setAttribute('class', 'nav-dot');
        }


    }



}



const App = () => {

    const IMAGES = 6 // total number of images in the /images folder
    
    initiatePlayBtn();
    initiateDots(IMAGES);
    initiateArrowBtn(IMAGES);
    initiateKeys();
    changeDot(1);
};






App();
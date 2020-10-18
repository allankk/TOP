import 'bootstrap';
import 'jquery';
import { navigation } from './nav';
import { clearHome, pageHome } from './page-home';
import { clearMenu, pageMenu } from './page-menu';
import { clearAbout, pageAbout } from './page-about';

const HOME = 'home';
const MENU = 'menu';
const ABOUT = 'about';

let activePage = HOME;

function App() {

    navigation();
    pageHome();

}


// helper function to clear content off of page
function clear(name) {
    if (name == HOME) {
        clearHome();
    } else if (name == MENU) {
        clearMenu();
    } else if (name == ABOUT) {
        clearAbout();
    }
}

function addEventListeners() {

    let homeBtn = document.getElementById('homeBtn');
    
    homeBtn.addEventListener("click", () => {
        if (activePage != HOME) {
            clear(activePage);
            pageHome();
            activePage = HOME;
        }
    });

    let menuBtn = document.getElementById('menuBtn');
    
    menuBtn.addEventListener("click", () => {
        if (activePage != MENU) {
            clear(activePage);
            pageMenu();
            activePage = MENU;
        }
    });

    let aboutBtn = document.getElementById('aboutBtn');
    
    aboutBtn.addEventListener("click", () => {
        if (activePage != ABOUT) {
            clear(activePage);
            pageAbout();
            activePage = ABOUT;
        }
    });

}

App();
addEventListeners();
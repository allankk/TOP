import { projectStorage } from './project-info.js';
import { popupDisplay } from './popup.js';
import { updateNav } from './ui-action.js';

function App() {
    updateNav(projectStorage());
    popupDisplay(projectStorage());
}

App();
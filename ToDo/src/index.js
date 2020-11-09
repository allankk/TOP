import { projectStorage, startStorage } from './project-info.js';
import { popupDisplay } from './popup.js';
import { updateNav } from './ui-action.js';

function App() {
    let projectStorage = startStorage();
    updateNav(projectStorage);
    popupDisplay(projectStorage);
}

App();
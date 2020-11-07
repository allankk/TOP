import { projectStorage } from './project-info.js';
import { popupDisplay } from './popup.js';

function App() {
    popupDisplay(projectStorage());
}

App();
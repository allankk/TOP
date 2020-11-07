import { addProject, addToDo } from './popup-action.js';

// Create listeners for DOM
const popupDisplay = (projectStorage) => {

    // create an array of added elements
    let popupElements = [];

    // get popup element from DOM
    const popup = document.getElementById("popup");

    // element that closes the popup
    const closeBtn = document.getElementsByClassName("close")[0];
    
    // button for add project
    const addProjectBtn = document.getElementById("new-project");
    
    // button for editing todo (TO BE CHANGED LATER)
    const toDoBtn = document.getElementById("todo-button");

    // button event for opening/closing popup
    addProjectBtn.onclick = function () {
        // add content to Add Project button
        popupAddProject(projectStorage, popupElements);
        popup.style.display = "block";
    };

    toDoBtn.onclick = function() {
        popupTodo(projectStorage, popupElements);
        popup.style.display = "block";
    }

    closeBtn.onclick = function () {
        popup.style.display = "none";
        removeContent(popupElements);
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            removeContent(popupElements);
        };
    };
};


// Create content into the popup for adding a project
const popupAddProject = (projectStorage, elementArray) => {
    const container = document.getElementsByClassName("popup-container")[0];
    const applyBtn = document.getElementById('apply');

    // create title space
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'content-div');
    elementArray.push(titleDiv);
    
    const titleP = document.createElement('p');
    titleP.innerHTML = 'Project Title'
    elementArray.push(titleP);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'titleInput');
    elementArray.push(titleInput);

    // create description space
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'content-div');
    elementArray.push(descriptionDiv);

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Project Description';
    elementArray.push(descriptionP);

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('class', 'descriptionInput');
    descriptionInput.setAttribute('rows', '4');
    elementArray.push(descriptionInput);

    // set apply button to retrieve information from the form
    applyBtn.onclick = function(event) {
        addProject(projectStorage, titleInput, descriptionInput);
        popup.style.display = "none";
        removeContent(elementArray);
    }

    // Add elements to DOM
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    container.insertBefore(titleDiv, applyBtn);
    container.insertBefore(descriptionDiv, applyBtn);
};

const popupTodo = (projectStorage, elementArray) => {
    const container = document.getElementsByClassName("popup-container")[0];
    const applyBtn = document.getElementById('apply');

    // create title space
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'content-div');
    elementArray.push(titleDiv);
    
    const titleP = document.createElement('p');
    titleP.innerHTML = 'Task Title';
    elementArray.push(titleP);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'titleInput');
    elementArray.push(titleInput);

    // create description space
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'content-div');
    elementArray.push(descriptionDiv);

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Task Description'
    elementArray.push(descriptionP);

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('class', 'descriptionInput');
    descriptionInput.setAttribute('rows', '4');
    elementArray.push(descriptionInput);

    // set apply button to retrieve information from the form
    applyBtn.onclick = function(event) {
        addToDo(projectStorage, 0, titleInput, descriptionInput);
        popup.style.display = "none";
        removeContent(elementArray);
    }

    // Add elements to DOM
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    container.insertBefore(titleDiv, applyBtn);
    container.insertBefore(descriptionDiv, applyBtn);
}

// remove elements from DOM and empty the element array
const removeContent = (elementArray) => {
    for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].parentNode.removeChild(elementArray[i]);
    }
    
    elementArray.splice(0, elementArray.length);
}

// TODO: delete the content from the popup after closing?
export { popupDisplay };
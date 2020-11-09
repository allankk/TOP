import { addProject, addToDo, getProjectIndex, getTaskIndex, checkIfProjectExists, checkIfTodoExists } from './popup-action.js';

// Create listeners for DOM
const popupDisplay = (projectStorage) => {

    // create an array of added elements
    // let popupElements = [];

    // get popup element from DOM
    const popup = document.getElementById("popup");

    // element that closes the popup
    // const closeBtn = document.getElementsByClassName("close")[0];
    
    // button for add project
    const addProjectBtn = document.getElementById("new-project");
    
    // button for adding/editing todo
    // const toDoBtn = document.getElementById("todo-button");
    // const AddTodoBtn = document.getElementById("add-todo-button");

    // button event for opening/closing popup
    // addProjectBtn.onclick = function () {
    //     // add content to Add Project button
    //     popupAddProject(projectStorage, []);
    //     popup.style.display = "block";
    // };

    // toDoBtn.onclick = function() {
    //     popupTodo(projectStorage, popupElements);
    //     popup.style.display = "block";
    // }

    // AddTodoBtn.onclick = function() {
    //     popupTodo(projectStorage, popupElements);
    //     popup.style.display = "block";
    // }

    // closeBtn.onclick = function () {
    //     popup.style.display = "none";
    //     removeContent(popupElements);
    // };

    // window.onclick = function(event) {
    //     if (event.target == popup) {
    //         popup.style.display = "none";
    //         removeContent(popupElements);
    //     };
    // };
};


// Create content into the popup for adding a project
const popupAddProject = (projectStorage, currentProjectID, elementArray) => {

    let projectIndex = getProjectIndex(projectStorage, currentProjectID);

    let doesProjectExist = checkIfProjectExists(projectStorage, currentProjectID);

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
    if (doesProjectExist) {
        titleInput.setAttribute('value', projectStorage.projects[projectIndex].projectTitle)
    }
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
    if (doesProjectExist) {
        descriptionInput.innerHTML = projectStorage.projects[projectIndex].projectDescription;
    }


    elementArray.push(descriptionInput);

    


    // set apply button to retrieve information from the form
    applyBtn.onclick = function(event) {
        addProject(projectStorage, currentProjectID, titleInput, descriptionInput);
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

    // Remove content when closing popup
    const closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.onclick = function () {
        popup.style.display = "none";
        removeContent(elementArray);
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            removeContent(elementArray);
        };
    };

};

const popupTodo = (projectStorage, elementArray, currentProjectID, currentTaskID) => {
    const container = document.getElementsByClassName("popup-container")[0];
    const applyBtn = document.getElementById('apply');

    let projectIndex = getProjectIndex(projectStorage, currentProjectID);

    let doesTaskExist = checkIfTodoExists(projectStorage, projectIndex, currentTaskID);

    // create title space
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'content-div');
    elementArray.push(titleDiv);
    
    const titleP = document.createElement('p');
    titleP.innerHTML = 'Task Title';
    elementArray.push(titleP);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'titleInput');
    
    // create description space
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'content-div');

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Task Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('class', 'descriptionInput');
    descriptionInput.setAttribute('rows', '4');


    // create date space
    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'content-div');

    const dateP = document.createElement('p');
    dateP.innerHTML = 'Due Date';

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'due-date');

    // create time space
    const timeDiv = document.createElement('div');
    timeDiv.setAttribute('class', 'content-div');

    const timeP = document.createElement('p');
    timeP.innerHTML = 'Due Time';

    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('id', 'due-time');
    
    // if todo exists, add placeholders
    if (doesTaskExist) {
        let taskIndex = getTaskIndex(projectStorage, projectIndex, currentTaskID);

        titleInput.setAttribute('value', projectStorage.projects[projectIndex].todos[taskIndex].todoTitle);
        descriptionInput.innerHTML = projectStorage.projects[projectIndex].todos[taskIndex].todoDescription
        dateInput.setAttribute('value', projectStorage.projects[projectIndex].todos[taskIndex].todoDate);
        timeInput.setAttribute('value', projectStorage.projects[projectIndex].todos[taskIndex].todoTime);
    }

    elementArray.push(titleInput);
    elementArray.push(descriptionDiv);
    elementArray.push(descriptionP);
    elementArray.push(descriptionInput);
    elementArray.push(dateDiv);
    elementArray.push(dateP);
    elementArray.push(dateInput);
    elementArray.push(timeDiv);
    elementArray.push(timeP);
    elementArray.push(timeInput)

    // set apply button to retrieve information from the form
    applyBtn.onclick = function(event) {
        addToDo(projectStorage, currentProjectID, currentTaskID, titleInput, descriptionInput, dateInput, timeInput);
        popup.style.display = "none";
        removeContent(elementArray);
    }

    // Add elements to DOM
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    dateDiv.appendChild(dateP);
    dateDiv.appendChild(dateInput);

    timeDiv.appendChild(timeP);
    timeDiv.appendChild(timeInput);

    container.insertBefore(titleDiv, applyBtn);
    container.insertBefore(descriptionDiv, applyBtn);
    container.insertBefore(dateDiv, applyBtn);
    container.insertBefore(timeDiv, applyBtn);

   // remove content when closing popup
   const closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.onclick = function () {
        popup.style.display = "none";
        removeContent(elementArray);
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            removeContent(elementArray);
    };
};
}

// remove elements from DOM and empty the element array
const removeContent = (elementArray) => {
    for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].parentNode.removeChild(elementArray[i]);
    }
    
    elementArray.splice(0, elementArray.length);
}

// TODO: delete the content from the popup after closing?
export { popupDisplay, popupAddProject, popupTodo };
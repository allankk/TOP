// Create listeners for DOM
const popupDisplay = () => {

    // form popup element
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
        popupAddProject();
        popup.style.display = "block";
    };

    toDoBtn.onclick = function() {
        popupTodo();
        popup.style.display = "block";
    }

    closeBtn.onclick = function () {
        popup.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        };
    };
};


// Create content into the popup for adding a project
const popupAddProject = () => {
    const container = document.getElementsByClassName("popup-container")[0];
    const applyBtn = document.getElementById('apply');

    // create title space
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'content-div');
    
    const titleP = document.createElement('p');
    titleP.innerHTML = 'Project Title'

    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'titleInput');

    // create description space
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'content-div');

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Project Description'

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('class', 'descriptionInput');
    descriptionInput.setAttribute('rows', '4');

    // Add elements to DOM

    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    container.insertBefore(titleDiv, applyBtn);
    container.insertBefore(descriptionDiv, applyBtn);
};

const popupTodo = () => {
    const container = document.getElementsByClassName("popup-container")[0];
    const applyBtn = document.getElementById('apply');

    // create title space
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'content-div');
    
    const titleP = document.createElement('p');
    titleP.innerHTML = 'Task Title'

    const titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'titleInput');

    // create description space
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'content-div');

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Task Description'

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('class', 'descriptionInput');
    descriptionInput.setAttribute('rows', '4');

    // Add elements to DOM
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    container.insertBefore(titleDiv, applyBtn);
    container.insertBefore(descriptionDiv, applyBtn);
}

// TODO: delete the content from the popup after closing?

export { popupDisplay };
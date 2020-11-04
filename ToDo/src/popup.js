// Create listeners for DOM
const popupDisplay = () => {

    // add content to Add Project button
    popupAddProject();

    // form popup element
    const popup = document.getElementById("popup");


    // element that closes the popup
    const closeBtn = document.getElementsByClassName("close")[0];
    

    // button for add project
    const addProjectBtn = document.getElementById("new-project");
    

    // button event for opening/closing popup
    addProjectBtn.onclick = function () {
        popup.style.display = "block";
    };

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

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('class', 'descriptionInput');


    // Add the elements to DOM
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(titleInput);

    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(descriptionInput);

    container.appendChild(titleDiv);
    container.appendChild(descriptionDiv);
};


export { popupDisplay };
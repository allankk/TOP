import { popupDisplay, popupAddProject, popupTodo } from './popup.js';
import { getProjectIndex } from './popup-action.js';


// remove project information from DOM (for updating the html)
const removeProjectDOM = () => {
    const projectHTML = document.getElementsByTagName("section")[0];

    if (projectHTML != undefined) {
        projectHTML.parentNode.removeChild(projectHTML);
    }    
}

const removeNavDOM = () => {
    const navHTML = document.getElementById('project-list');

    while (navHTML.children[0]) {
        navHTML.removeChild(navHTML.children[0])
    }
}


// Update navbar buttons
const updateNav = (projectStorage) => {
    
    removeNavDOM();
    let navButtons = [];

    // create add project button
    const addProjectBtn = document.createElement('li');
    addProjectBtn.setAttribute('id', 'new-project-li');

    const addProjectA = document.createElement('a');
    addProjectA.setAttribute('href', '#new-project');
    addProjectA.setAttribute('id', 'new-project');
    addProjectA.setAttribute('class', 'new-project');
    addProjectA.innerHTML = '+ add project';

    addProjectBtn.appendChild(addProjectA);

    addProjectBtn.onclick = function() {
        const popup = document.getElementById("popup");   
        popupDisplay(projectStorage);       
        popupAddProject(projectStorage, null, [])
        popup.style.display = "block";
    }

    navButtons.push(addProjectBtn);

    // create nav-bar links
    projectStorage.projects.forEach(element => {
        const linkContainer = document.createElement('li');
        linkContainer.setAttribute('class', 'project')
        const link = document.createElement('a')
        link.setAttribute('class', 'nav-link');
        link.setAttribute('id', `project-${element.projectID}`);
        link.innerHTML = element.projectTitle;

        linkContainer.appendChild(link);

        link.onclick = function() {
            updateProject(projectStorage, element.projectID);
        }

        navButtons.push(linkContainer);
    });

    const projectList = document.getElementById('project-list');

    // add items to DOM
    navButtons.forEach(element => {     
        projectList.appendChild(element);
    })

}

const updateProject = (projectStorage, projectID) => {

    removeProjectDOM();

    let projectIndex = null;
    
    // console.log(`length is ${projectStorage.projects.length}` )
    for (let i = 0; i < projectStorage.projects.length; i++) {
        if (projectStorage.projects[i].projectID == projectID) {
            projectIndex = i;
        }
    };

    const mainContainer = document.getElementById('main-container');
    const projectSection = document.createElement('section');
    
    projectSection.setAttribute('class', 'main-section');
    projectSection.setAttribute('class', `project-${projectID}`);
    
    // add project head to DOM

    const projectHead = document.createElement('div');
    projectHead.setAttribute('class', 'project-head');

    const projectContent = document.createElement('div');
    projectContent.setAttribute('class', 'content');

    const projectHeader = document.createElement('header');
    projectHeader.innerHTML = projectStorage.projects[projectIndex].projectTitle;

    const projectDescription = document.createElement('p');
    projectDescription.innerHTML = projectStorage.projects[projectIndex].projectDescription;

    projectContent.appendChild(projectHeader);
    projectContent.appendChild(projectDescription);

    const projectButtonContainer = document.createElement('div');
    projectButtonContainer.setAttribute('class', 'buttons');

    const buttonPencil = document.createElement('i');
    buttonPencil.setAttribute('class', 'fa fa-pencil-alt');
    buttonPencil.setAttribute('aria-hidden', 'true');

    buttonPencil.onclick = function() {
        const popup = document.getElementById("popup");   
        popupDisplay(projectStorage);       
        popupAddProject(projectStorage, projectID, [])
        popup.style.display = "block";
    }

    const buttonTrash = document.createElement('i');
    buttonTrash.setAttribute('class', 'fa fa-trash');
    buttonTrash.setAttribute('aria-hidden', 'true');
    
    buttonTrash.onclick = function() {
        let projectIndex = getProjectIndex(projectStorage, projectID);

        projectStorage.projects.splice(projectIndex, 1);

        updateNav(projectStorage);
        removeProjectDOM();
    }

    projectButtonContainer.appendChild(buttonPencil);
    projectButtonContainer.appendChild(buttonTrash);

    projectHead.appendChild(projectContent);
    projectHead.appendChild(projectButtonContainer);

    // add 'add task' button

    const addTaskContainer = document.createElement('div');
    addTaskContainer.setAttribute('class', 'add-todo');

    const addButtonContainer = document.createElement('div');
    addButtonContainer.setAttribute('class', 'add-button');
    addButtonContainer.setAttribute('id', 'add-todo-button');

    addButtonContainer.onclick = function() {
        const popup = document.getElementById("popup");   
        popupDisplay(projectStorage);       
        popupTodo(projectStorage, [], projectID, null)
        popup.style.display = "block";
    }

    const addTaskSpan = document.createElement('span');
    addTaskSpan.innerHTML = 'add task';

    const addTaskI = document.createElement('i');
    addTaskI.setAttribute('class', 'fa fa-plus-circle');
    addTaskI.setAttribute('aria-hidden', 'true');

    addButtonContainer.appendChild(addTaskSpan);
    addButtonContainer.appendChild(addTaskI);

    addTaskContainer.appendChild(addButtonContainer);

    mainContainer.appendChild(projectSection);
    projectSection.appendChild(projectHead);
    projectSection.appendChild(addTaskContainer);
    
    // Add project content (todos)

    projectStorage.projects[projectIndex].todos.forEach(element => {

        const taskContentContainer = document.createElement('div');
        taskContentContainer.setAttribute('class', 'project-content');
    
        const taskContent = document.createElement('div');
        taskContent.setAttribute('class', 'content');

        const taskTitle = document.createElement('div');
        taskTitle.setAttribute('class', 'title');
        taskTitle.innerHTML = element.todoTitle;

        const taskDescription = document.createElement('div');
        taskDescription.setAttribute('class', 'description');
        taskDescription.innerHTML = element.todoDescription;

        const taskDate = document.createElement('div');
        taskDate.setAttribute('class', 'date');
        taskDate.innerHTML = "dd/mm/yy hh:mm";

        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskDate);

        // buttons
        const taskButtons = document.createElement('div');
        taskButtons.setAttribute('class', 'buttons');

        const buttonPencil = document.createElement('i');
        buttonPencil.setAttribute('class', 'fa fa-pencil-alt');
        buttonPencil.setAttribute('aria-hidden', 'true');
        buttonPencil.setAttribute('id', 'todo-button');
        buttonPencil.onclick = function() {
            const popup = document.getElementById("popup");   
            popupDisplay(projectStorage);       
            popupTodo(projectStorage, [], projectID, element.todoID);
            popup.style.display = "block";
        }

        const buttonTrash = document.createElement('i');
        buttonTrash.setAttribute('class', 'fa fa-trash');
        buttonTrash.setAttribute('aria-hidden', 'true');
        buttonTrash.onclick = function() {
            let todoIndex = null;

            for (let i = 0; i < projectStorage.projects[projectIndex].todos.length; i++) {
                if (projectStorage.projects[projectIndex].todos[i] == element) {
                    todoIndex = i;
                }
            }

            projectStorage.projects[projectIndex].todos.splice(todoIndex, 1);
            updateProject(projectStorage, projectID);
        }

        taskButtons.appendChild(buttonPencil);
        taskButtons.appendChild(buttonTrash);

        taskContentContainer.appendChild(taskContent);
        taskContentContainer.appendChild(taskButtons);
        projectSection.appendChild(taskContentContainer);
    })
}



export { updateNav, updateProject, removeNavDOM };

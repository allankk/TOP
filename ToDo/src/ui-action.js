import { popupDisplay, popupAddProject, popupTodo } from './popup.js';
import { getProjectIndex } from './popup-action.js';
import { updateStorage } from './project-info.js';
import { differenceInDays, format, formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';

// clear all project DOM
const clearAllProjectDOM = (projectStorage) => {
    const projectHTML = document.querySelectorAll("section");
    if (projectHTML.length > 0) {
        for (let i = 0; i < projectHTML.length; ++i) {
            projectHTML[i].parentNode.removeChild(projectHTML[i]);
        }
    }
}


// set toggler to change project storage
const setTogglerFunctions = (projectStorage) => {
    const radioOne = document.getElementById('radio-one');
    const radioTwo = document.getElementById('radio-two');

    radioOne.onclick = function () {
        if (projectStorage.isSmall) {
            return
        } else {
            projectStorage.isSmall = true;
            updateStorage(projectStorage);
            clearAllProjectDOM(projectStorage);
            startProjectDOM(projectStorage);
        }
    }

    radioTwo.onclick = function () {
        if (!projectStorage.isSmall) {
            return
        } else {
            projectStorage.isSmall = false;
            updateStorage(projectStorage);
            clearAllProjectDOM(projectStorage);
            startProjectDOM(projectStorage);
        }
    }
}


// check toggler button if display should be small or large;
const checkToggler = (projectStorage) => {
    if (projectStorage.isSmall) {
        document.getElementById('radio-one').checked = true;
        document.getElementById('radio-two').checked = false;
    } else {
        document.getElementById('radio-one').checked = false;
        document.getElementById('radio-two').checked = true;
    }
}

// remove project information from DOM (for updating the html)
const removeProjectDOM = (projectStorage) => {

    // create an array of projects to be removed from DOM
    const removableProjects = [];
    projectStorage.projects.forEach(element => {
        if (element.isOpen == false) {
            removableProjects.push(element);
        }
    })

    // console.log(removableProjects);

    // remove the projects that are not open
    const projectHTML = document.querySelectorAll("section");
    if (projectHTML.length > 0) {
        for (let i = 0; i < projectHTML.length; i++) {
            for (let j = 0; j < removableProjects.length; j++) {
                if (projectHTML[i].className == ('project-' + removableProjects[j].projectID)) {
                    projectHTML[i].parentNode.removeChild(projectHTML[i]);
                }
            }
        }
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
    
    setTogglerFunctions(projectStorage);
    checkToggler(projectStorage);
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

        if (element.isOpen == true) {
            link.classList.add("selected");
            
        } else {
            link.classList.remove("selected");    
        }

        link.onclick = function() {
            if (element.isOpen == true) {
                element.isOpen = false;
                link.classList.remove("selected");
            } else {
                element.isOpen = true;
                link.classList.add("selected");
            }
            
            if (element.isOpen == false) {
                removeProjectDOM(projectStorage);
            } else {
                updateProject(projectStorage, element.projectID);
            }

            updateStorage(projectStorage);
        }

        navButtons.push(linkContainer);
    });

    const projectList = document.getElementById('project-list');

    // add items to DOM
    navButtons.forEach(element => {     
        projectList.appendChild(element);
    })

}

// check if date or time are empty
const checkDate = (element) => {
    return (element.todoDate == '') ? false : true;
}

const checkTime = (element) => {
    return (element.todoTime == '') ? false : true;
}



const updateProject = (projectStorage, projectID) => {
    
    updateStorage(projectStorage);
    // removeProjectDOM(projectStorage);

    let projectIndex = null;
    let contentItems = [];
    
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
    contentItems.push(projectHead);

    const projectContent = document.createElement('div');
    projectContent.setAttribute('class', 'content');
    contentItems.push(projectContent);

    const projectHeader = document.createElement('header');
    projectHeader.innerHTML = projectStorage.projects[projectIndex].projectTitle;
    contentItems.push(projectHeader);

    const projectDescription = document.createElement('p');
    projectDescription.innerHTML = projectStorage.projects[projectIndex].projectDescription;
    contentItems.push(projectDescription);

    projectContent.appendChild(projectHeader);
    projectContent.appendChild(projectDescription);

    const projectButtonContainer = document.createElement('div');
    projectButtonContainer.setAttribute('class', 'buttons');
    contentItems.push(projectButtonContainer);

    const buttonPencil = document.createElement('i');
    buttonPencil.setAttribute('class', 'fa fa-pencil-alt');
    buttonPencil.setAttribute('aria-hidden', 'true');
    contentItems.push(buttonPencil);

    buttonPencil.onclick = function() {
        const popup = document.getElementById("popup");   
        popupDisplay(projectStorage);       
        popupAddProject(projectStorage, projectID, [])
        popup.style.display = "block";
    }

    const buttonTrash = document.createElement('i');
    buttonTrash.setAttribute('class', 'fa fa-trash');
    buttonTrash.setAttribute('aria-hidden', 'true');
    contentItems.push(buttonTrash);
    
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
    contentItems.push(addTaskContainer);

    const addButtonContainer = document.createElement('div');
    addButtonContainer.setAttribute('class', 'add-button');
    addButtonContainer.setAttribute('id', 'add-todo-button');
    contentItems.push(addButtonContainer);

    addButtonContainer.onclick = function() {
        const popup = document.getElementById("popup");   
        popupDisplay(projectStorage);       
        popupTodo(projectStorage, [], projectID, null)
        popup.style.display = "block";
    }

    const addTaskSpan = document.createElement('span');
    addTaskSpan.innerHTML = 'add task';
    contentItems.push(addTaskSpan);

    const addTaskI = document.createElement('i');
    addTaskI.setAttribute('class', 'fa fa-plus-circle');
    addTaskI.setAttribute('aria-hidden', 'true');
    contentItems.push(addTaskI);

    // if small items is selected, add a class of 'small' to elements
    if (projectStorage.isSmall) {
        contentItems.forEach(element => {
            element.classList.add('small');
        })
    }

    addButtonContainer.appendChild(addTaskSpan);
    addButtonContainer.appendChild(addTaskI);

    addTaskContainer.appendChild(addButtonContainer);

    mainContainer.appendChild(projectSection);
    projectSection.appendChild(projectHead);
    projectSection.appendChild(addTaskContainer);
    
    // Add project content (todos)

    projectStorage.projects[projectIndex].todos.forEach(element => {

        let taskItems = [];

        const taskContentContainer = document.createElement('div');
        taskContentContainer.setAttribute('class', 'project-content');
        taskItems.push(taskContentContainer);
    
        const taskContent = document.createElement('div');
        taskContent.setAttribute('class', 'content');
        taskItems.push(taskContent);

        const taskTitle = document.createElement('div');
        taskTitle.setAttribute('class', 'title');
        taskTitle.innerHTML = element.todoTitle;
        taskItems.push(taskTitle);

        const taskDescription = document.createElement('div');
        taskDescription.setAttribute('class', 'description');
        taskDescription.innerHTML = element.todoDescription;
        taskItems.push(taskDescription);

        const taskDate = document.createElement('div');
        taskDate.setAttribute('class', 'date');
        taskItems.push(taskDate);


        // get the date element. Format relative functions

        const formatRelativeLocale = {
            lastWeek: "'last' eeee",
            yesterday: "'yesterday'",
            today: "'today'",
            tomorrow: "'tomorrow'",
            nextWeek: "eeee",
            other: 'dd.MM.yyyy',
        }

        const locale = {
            ...enGB,
            formatRelative: (token) => formatRelativeLocale[token],
        };


        if (checkDate(element) && checkTime(element)) {
            let newDate = new Date(element.todoDate + " " + element.todoTime);
            let currentDate = new Date();
    
            function relativeDate(date, baseDate, options) {
                return Math.abs(differenceInDays(date, baseDate)) < 6
                  ? formatRelative(date, baseDate, { locale: enGB })
                  : format(date, 'dd.MM.yyyy    HH:mm');
            }
    
            taskDate.innerHTML = `${relativeDate(newDate, currentDate)}`;
        }  else if (checkDate(element)) {
            let newDate = new Date(element.todoDate);
            let currentDate = new Date();

            function relativeDate(date, baseDate, options) {
                return Math.abs(differenceInDays(date, baseDate)) < 6
                  ? formatRelative(date, baseDate, { locale })
                  : format(date, `dd.MM.yyyy`)
            }
    
            taskDate.innerHTML = `${relativeDate(newDate, currentDate)}`;
        } else if (checkTime(element)) {
            taskDate.innerHTML = `${element.todoTime}`;
        }

        // 

        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskDate);

        // buttons
        const taskButtons = document.createElement('div');
        taskButtons.setAttribute('class', 'buttons');
        taskItems.push(taskButtons);

        const buttonPencil = document.createElement('i');
        buttonPencil.setAttribute('class', 'fa fa-pencil-alt');
        buttonPencil.setAttribute('aria-hidden', 'true');
        buttonPencil.setAttribute('id', 'todo-button');
        taskItems.push(buttonPencil);

        buttonPencil.onclick = function() {
            const popup = document.getElementById("popup");   
            popupDisplay(projectStorage);       
            popupTodo(projectStorage, [], projectID, element.todoID);
            popup.style.display = "block";
        }

        const buttonTrash = document.createElement('i');
        buttonTrash.setAttribute('class', 'fa fa-trash');
        buttonTrash.setAttribute('aria-hidden', 'true');
        taskItems.push(buttonTrash);

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

        // if small items are selected, add class 'small' to every element
        if (projectStorage.isSmall) {
            taskItems.forEach(element => {
                element.classList.add('small');
            })

            // clicking content will reveal description and date
            taskContent.onclick = function() {
                if (taskContentContainer.classList.contains('visible')) {
                    taskContentContainer.classList.remove('visible');
                } else {
                    taskContentContainer.classList.add('visible');
                }

                if (taskContent.classList.contains('visible')) {
                    taskContent.classList.remove('visible');
                } else {
                    taskContent.classList.add('visible');
                }

                if (taskDescription.classList.contains('visible')) {
                    taskDescription.classList.remove('visible');
                } else {
                    taskDescription.classList.add('visible');
                }

                if (taskDate.classList.contains('visible')) {
                    taskDate.classList.remove('visible');
                } else {
                    taskDate.classList.add('visible');
                }
            }
        }


        taskButtons.appendChild(buttonPencil);
        taskButtons.appendChild(buttonTrash);

        taskContentContainer.appendChild(taskContent);
        taskContentContainer.appendChild(taskButtons);
        projectSection.appendChild(taskContentContainer);
    })
}

// update the DOM when starting the page or refreshing 
// so that you would start where you left off
const startProjectDOM = (projectStorage) => {
    projectStorage.projects.forEach(element => {
        if (element.isOpen) {
            updateProject(projectStorage, element.projectID);
        }
    })
}


export { updateNav, updateProject, removeNavDOM, startProjectDOM };

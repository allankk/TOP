import { updateNav, updateProject } from './ui-action.js';

const checkIfProjectExists = (projectStorage, projectID) => {
    let doesProjectExist = false;

    projectStorage.projects.forEach(element => {
        if (element.projectID == projectID){
            doesProjectExist = true;
        }
    })

    return doesProjectExist;
}

const checkIfTodoExists = (projectStorage, projectIndex, taskID) => {
    let doesTaskExist = false;

    projectStorage.projects[projectIndex].todos.forEach(element => {
        if (element.todoID == taskID) {
            doesTaskExist = true;
        }
    });
    
    return doesTaskExist;
}

// get project index in array;
const getProjectIndex = (projectStorage, currentProjectID) => {
    for (let i = 0; i < projectStorage.projects.length; i++) {
        if (projectStorage.projects[i].projectID == currentProjectID) {
            return i;
        }
    }
}


const createNewProject = (projectStorage, titleInput, descriptionInput) => {
    // Find new project ID
    function getNewProjectID(projectStorage) {
        let lastID = 0;

        projectStorage.projects.forEach(element => {
            if (element.projectID > lastID) {
                lastID = element.projectID;
            }
        })

        return lastID + 1;
    }

    // Create project object
    let projectItem = {
        projectID: getNewProjectID(projectStorage),
        projectTitle: `${titleInput.value}`,
        projectDescription: `${descriptionInput.value}`,
        todos: []
    }

    // Add project to projectStorage
    projectStorage.projects.push(projectItem);

}

const addProject = (projectStorage, currentProjectID, titleInput, descriptionInput) => {
    if (titleInput == '' || titleInput == undefined || titleInput == null) {
        console.log("The project needs a title");
        return;
    };

    if (checkIfProjectExists(projectStorage, currentProjectID)) {
        const projectIndex = getProjectIndex(projectStorage, currentProjectID);
        
        projectStorage.projects[projectIndex].projectTitle = titleInput.value;
        projectStorage.projects[projectIndex].projectDescription = descriptionInput.value;

        updateProject(projectStorage, currentProjectID);
    } else {
        createNewProject(projectStorage, titleInput, descriptionInput);
    }

    // update the nav bar to add the project button
    updateNav(projectStorage);
}

const createNewTask = (projectStorage, projectIndex, titleInput, descriptionInput) => {
    // Find new todo ID
    function getNewTodoID(projectStorage, projectIndex) {
        let lastID = 0;

        projectStorage.projects[projectIndex].todos.forEach(element => {
            if (element.todoID > lastID) {
                lastID = element.todoID;
            }
        })

        return lastID + 1;
    }

    // Create todo object
    let todoItem = {
        todoID: getNewTodoID(projectStorage, projectIndex),
        todoTitle: `${titleInput.value}`,
        todoDescription: `${descriptionInput.value}`,
    }
    
    // push todo object to project
    projectStorage.projects[projectIndex].todos.push(todoItem);

}

// find task index
function getTaskIndex(projectStorage, projectIndex, currentTaskID) {
    for (let i = 0; i < projectStorage.projects[projectIndex].todos.length; i++) {
        if (projectStorage.projects[projectIndex].todos[i].todoID == currentTaskID) {
            return i;
        }
    }
}

const addToDo = (projectStorage, currentProjectID, currentTaskID, titleInput, descriptionInput) => {
    // check if project exists
    if (checkIfProjectExists(projectStorage, currentProjectID) == false) return;

    let projectIndex = getProjectIndex(projectStorage, currentProjectID);

    // if task exists, edit the content. If not, create new task.
    if (checkIfTodoExists(projectStorage, projectIndex, currentTaskID)) {

        const taskIndex = getTaskIndex(projectStorage, projectIndex, currentTaskID);

        projectStorage.projects[projectIndex].todos[taskIndex].todoTitle = titleInput.value;
        projectStorage.projects[projectIndex].todos[taskIndex].todoDescription = descriptionInput.value;

    } else {
        createNewTask(projectStorage, projectIndex, titleInput, descriptionInput);
    }

    // update the project DOM
    updateProject(projectStorage, currentProjectID);
}


export { addProject, addToDo, getProjectIndex, getTaskIndex, checkIfProjectExists, checkIfTodoExists };
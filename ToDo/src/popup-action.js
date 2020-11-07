const checkIfProjectExists = (projectStorage, projectID) => {
    let doesProjectExist = false;

    projectStorage.projects.forEach(element => {
        if (element.projectID == projectID){
            doesProjectExist = true;
        }
    })

    return doesProjectExist;
}

// TODO
const checkIfTodoExists = (projectID, todoID) => {
    return true;
}


const addProject = (projectStorage, titleInput, descriptionInput) => {
    if (titleInput == '' || titleInput == undefined || titleInput == null) {
        console.log("The project needs a title");
        return;
    };

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
    console.log(projectStorage);
}


const addToDo = (projectStorage, currentProjectID, titleInput, descriptionInput) => {
    // check if project exists
    if (checkIfProjectExists(projectStorage, currentProjectID) == false) return;

    // get project index in array;
    function getProjectIndex(projectStorage, currentProjectID) {
        for (let i = 0; i < projectStorage.projects.length; i++) {
            if (projectStorage.projects[i].projectID == currentProjectID) {
                return i;
            }
        }
    }

    let projectIndex = getProjectIndex(projectStorage, currentProjectID);

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

    console.log(projectStorage);

}

// let projectStorage = {
//     projects:[
//         {
//             projectID: 0,
//             projectTitle: "Project 0",
//             projectDescription: "description 0",
//             todos: [
//                 {
//                     todoID: 0,
//                     todoTitle: "todo Title 0",
//                     todoDescription: "todo description 0"
//                 },
//                 {
//                     todoID: 1,
//                     todoTitle: "todo Title 1",
//                     todoDescription: "todo description 1"
//                 }
//             ]
//         },
//         {
//             projectID: 1,
//             projectTitle: "Project 1",
//             projectDescription: "description 1",
//             todos:[
//                 {
//                     todoID: 0,
//                     todoTitle: "todo Title 0",
//                     todoDescription: "todo description 0"
//                 },
//                 {
//                     todoID: 1,
//                     todoTitle: "todo Title 1",
//                     todoDescription: "todo description 1"
//                 }
//             ]
//         }
//     ]
// }

export { addProject, addToDo };
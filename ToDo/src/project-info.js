// localStorage info.

const startStorage = () => {
    let projectStorage;
    if (localStorage.getItem('projectStorage') == undefined) {
        projectStorage = {
            projects:[
                {
                    projectID: 0,
                    projectTitle: "Simple Todo App",
                    projectDescription: "This App uses Local Storage to save your work. <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target='_blank'>Read more</a>",
                    todos: [
                        {
                            todoID: 0,
                            todoTitle: "Sample Task",
                            todoDescription: "Task description goes here",
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 1,
                            todoTitle: "Sample Task 2",
                            todoDescription: "Task description goes here",
                            todoDate: "",
                            todoTime: ""
                        }
                    ]
                }
            ]
        }
        localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
    } else {
        projectStorage = JSON.parse(localStorage.getItem('projectStorage'));
    }

    return projectStorage;
}

const updateStorage = (projectStorage) => {
    localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}

export { startStorage, updateStorage };
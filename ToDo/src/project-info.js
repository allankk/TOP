// localStorage info.

const startStorage = () => {
    let projectStorage;
    if (localStorage.getItem('projectStorage') == undefined) {
        projectStorage = {
            isSmall: true,
            projects:[
                {
                    projectID: 0,
                    projectTitle: "Simple Todo App",
                    projectDescription: "This App uses Local Storage to save your work. <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target='_blank'>Read more</a>",
                    isOpen: true,
                    todos: [
                        {
                            todoID: 0,
                            todoTitle: "Click on me to display more information",
                            todoDescription: "Check the toggleswitch on the bottom of the page to see all tasks fully.",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 1,
                            todoTitle: "Add a project",
                            todoDescription: "Add a project using the first item on the navigation bar",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 2,
                            todoTitle: "Add a task",
                            todoDescription: "Add a task using the 'add task' button above. You can also add a due date for your task.",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        }
                    ]
                },
                {
                    projectID: 1,
                    projectTitle: "Project 1",
                    projectDescription: "Project description goes here",
                    isOpen: false,
                    todos: [
                        {
                            todoID: 0,
                            todoTitle: "Sample Task 1",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 1,
                            todoTitle: "Sample Task 2",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        }
                    ]
                },
                {
                    projectID: 2,
                    projectTitle: "Project 2",
                    projectDescription: "",
                    isOpen: false,
                    todos: [
                        {
                            todoID: 0,
                            todoTitle: "Sample Task 1",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 1,
                            todoTitle: "Sample Task 2",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        }
                    ]
                },
                {
                    projectID: 3,
                    projectTitle: "Project 3",
                    projectDescription: "",
                    isOpen: false,
                    todos: [
                        {
                            todoID: 0,
                            todoTitle: "Sample Task 1",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
                            todoDate: "",
                            todoTime: ""
                        },
                        {
                            todoID: 1,
                            todoTitle: "Sample Task 2",
                            todoDescription: "Task description goes here",
                            todoColor: 0,
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
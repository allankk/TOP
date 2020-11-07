// localStorage info.

const projectStorage = () => {
    // const projectStorage = [];
    let projectStorage = {
        projects:[
            {
                projectID: 0,
                projectTitle: "Project 0",
                projectDescription: "description 0",
                todos: [
                    {
                        todoID: 0,
                        todoTitle: "todo Title 0",
                        todoDescription: "todo description 0"
                    },
                    {
                        todoID: 1,
                        todoTitle: "todo Title 1",
                        todoDescription: "todo description 1"
                    }
                ]
            },
            {
                projectID: 1,
                projectTitle: "Project 1",
                projectDescription: "description 1",
                todos:[
                    {
                        todoID: 0,
                        todoTitle: "todo Title 0",
                        todoDescription: "todo description 0"
                    },
                    {
                        todoID: 1,
                        todoTitle: "todo Title 1",
                        todoDescription: "todo description 1"
                    }
                ]
            },
            {
                projectID: 2,
                projectTitle: "Project 2",
                projectDescription: "description 2",
                todos:[
                    {
                        todoID: 0,
                        todoTitle: "todo Title 0",
                        todoDescription: "todo description 0"
                    },
                    {
                        todoID: 1,
                        todoTitle: "todo Title 1",
                        todoDescription: "todo description 1"
                    }
                ]
            }
        ]
    }

    console.log(projectStorage);

    return projectStorage;
}

export { projectStorage };
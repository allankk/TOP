import React, { Component } from 'react';
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();
    
        this.state = {
            task: "",
            tasks: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value,
        });
    }

    onSubmitTask = (e) => {
        e.preventDefault();

        let addTask = {
            name: this.state.task,
            key: uniqid()
        }

        this.setState({
            tasks: this.state.tasks.concat(addTask),
            task: "",
        })
    }

    deleteCallback = (key) => {
        let taskArr = [...this.state.tasks];

        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].key === key) {
                taskArr.splice(i, 1);
            }
        }

        this.setState({
            tasks: taskArr,
            task: "",
        })
    }

    render() {
        const { task, tasks } = this.state;

        return (
            <div className="col-6 mx-auto mt-5">
                <form onSubmit={this.onSubmitTask}>
                    <div className="form-group">
                        <label htmlFor="taskInput">Enter task</label>
                        <input autoComplete='off' type="text" id="taskInput" className="form-control" onChange={this.handleChange} value={task} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add Task
                        </button>
                    </div>
                </form>
                <Overview tasks={tasks} delete={this.deleteCallback} />
            </div>
        )
    }
}


export default App
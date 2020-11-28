import React from "react";


const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return (
                <li key={task.key} className="mt-2"><button className="btn btn-secondary mr-2" onClick={() => props.delete(task.key)}>Delete</button>    {task.name}</li>
                );
            })}
        </ul>
    )
}

export default Overview;
import React from 'react';
import uniqid from "uniqid";

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    title: "Languages",
                    description: "Estonian C2, English C1, Russian A2, German A2"
                },
                {
                    title: "Software",
                    description: "Microsoft Office, AutoCAD, Civil3D"
                },
                {
                    title: "Programming",
                    description: "Java, Python, C, JavaScript (React)"
                },
                {
                    title: "Others",
                    description: "Guitar, piano, choir singing, tennis"
                }
            ]
        }
    }

    renderSkills() {

        return(
            <div>
                {this.state.skills.map(element => {
                    return (
                        <p className="mb-5" key={uniqid()}><span className="bold" key={uniqid()}>{element.title}: </span> {element.description}</p>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
        <div className="content-main">
            <h2 className="text-green">Skills</h2>

            {this.renderSkills()}


        </div>
        )
    }
}



export default Skills;
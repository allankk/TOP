import React from 'react';

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

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    };

    changeState(e, element, attribute) {
        let skillsArr = [...this.state.skills];

        skillsArr.forEach(stateElement => {
            if (stateElement === element) {
                element[attribute] = e.target.innerHTML;
            }
        });

        this.setState({ skills : skillsArr })
    }

    removeItem(element) {

        let skillsArr = [...this.state.skills];

        // reverse array loop for deleting an element
        for (let i = skillsArr.length-1; i >= 0; i-= 1) {
            if (skillsArr[i] === element) {
                skillsArr.splice(i, 1);
            }
        
        }

        this.setState({ skills : skillsArr });
        this.forceUpdate();
    }

    renderSkills() {
        return(
            <div>
                {this.state.skills.map((element, i) => {
                    return (
                        <div className="mb-5 content-skill" key={`s-div-${i}`}>
                            <button className="remove-btn" onClick={e => {(this.removeItem(element))}}>x</button>
                            <span className="bold" key={`s-title-${i}`} contentEditable onInput={e => this.changeState(e, element, 'title')}>{element.title}: </span> 
                            <span key={`s-description-${i}`} contentEditable onInput={e => this.changeState(e, element, 'description')}>{element.description}</span>
                        </div>
                        
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
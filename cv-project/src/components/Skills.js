import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Skills',
            skills: [
                {
                    title: "Languages",
                    description: "English C2, French C1, Mandarin B2, German B1"
                },
                {
                    title: "Software",
                    description: "Microsoft Office, Google Chrome"
                },
                {
                    title: "Programming",
                    description: "VBA, C"
                },
                {
                    title: "Others",
                    description: "Guitar, Football, Painting"
                }
            ]
        }


    }

    // stop rerendering when state is updated. Needed because of contentEditable being used.
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    };

    changeState(e, element, attribute) {
        if (attribute === 'main-title') {
            this.setState({ title: e.target.value });
            this.forceUpdate();
        } else {
            let skillsArr = [...this.state.skills];

            skillsArr.forEach(stateElement => {
                if (stateElement === element) {
                    element[attribute] = e.target.innerHTML;
                }
            });

            this.setState({ skills : skillsArr })
        }
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
        // force render after deletion from state.
        this.forceUpdate();
    }

    
    addItem() {
        let skillsArr = [...this.state.skills];

        let newItem = {
            title: "Category",
            description: "skill 1, skill 2",
        }

        skillsArr.push(newItem);

        this.setState( { skills : skillsArr } );
        // force render after adding a new item
        this.forceUpdate();
    }


    renderSkills() {
        return(
            <div>
                {this.state.skills.map((element, i) => {
                    return (
                        <div className="mb-5 content-skill" key={`s-div-${i}`}>
                            <button className="remove-btn" onClick={e => {(this.removeItem(element))}}>x</button>
                            {/* Use contenteditable instead of input to simplify resizing the box according to the content */}
                            <span className="bold" key={`s-title-${i}`} spellCheck="false" contentEditable onInput={e => this.changeState(e, element, 'title')}>{element.title}: </span> 
                            <span key={`s-description-${i}`} spellCheck="false" contentEditable onInput={e => this.changeState(e, element, 'description')}>{element.description}</span>
                        </div>
                        
                    )
                })}
            </div>
        )
    }

    render() {
        return (
        <div className="content-main">
            <input type="text" className="main-title text-green" spellCheck="false" onChange={e => this.changeState(e, null, 'main-title')} value={this.state.title}/>
            <button className="add-btn" onClick={e => {this.addItem()}}>+</button>

            {this.renderSkills()}
        </div>
        )
    }
}



export default Skills;
import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "experience",
            experience: [
                {
                    company: "Company Headquarters",
                    title: "Lead Designer: 09.2016, 02.2019 - ...",
                    description: "Solved technical problems related to design. Offered solutions and consulting to clients. Managed the schedules and budgets of different projects. Lead company seminars and courses. Managed a team of 10 and assisted the HR department with recruitment as well as marketing."
                },
                {
                    company: "School of Business",
                    title: "Assistant Professor: 07.2014-06.2015",
                    description: "Assisted several professors in creating study materials. Gave lectures and graded assignments. Participated in a research group dedicated to game theory in business."
                }
            ]
        }
    }

    changeState(e, element, attribute) {
        if (attribute === 'main-title') {
            this.setState( { title: e.target.value } )        
        } else {
            let expArr = [...this.state.experience];

            expArr.forEach(stateElement => {
                if (stateElement === element) {
                    element[attribute] = e.target.value;
                }
            })

            // resize textareas to fit contents
            if (e.target.localName === 'textarea') {
                e.target.style.height = 0;
                e.target.style.height = e.target.scrollHeight + 6 + 'px';
            }

            this.setState({ experience : expArr });
        }


    }

    // remove a content item.
    removeItem(element) {
        let expArr = [...this.state.experience];

        // reverse array loop for deleting an element
        for (let i = expArr.length-1; i >= 0; i-= 1) {
            if (expArr[i] === element) {
                expArr.splice(i, 1);
            }
        
        }

        this.setState({ experience : expArr });
    }

    addItem() {
        let expArr = [...this.state.experience];

        let newItem = {
            company: "company",
            title: "title: 01.2000 - 12.2000",
            description: "Description"
        }

        expArr.push(newItem);

        this.setState( { experience : expArr } );
    
    }

    renderExperience() {
        return(
            <div>
                {this.state.experience.map((element,i) => {
                    return (
                        <div key={`e-div-${i}`} className="content-item">
                            <button className="remove-btn" onClick={e => {this.removeItem(element)}}>x</button>
                            <input key={`e-company-${i}`} className="company text-green" type="text" spellCheck="false" onChange={e => this.changeState(e, element, 'company')} value={element.company} />
                            <input key={`e-title-${i}`} className="title" spellCheck="false" type="text" onChange={e => this.changeState(e, element, 'title')} value={element.title} />
                            {/* <h3 key={uniqid()}>{element.title}: {element.time}</h3> */}
                            <textarea key={`e-description-${i}`} className="description" spellCheck="false" type="text" onChange={e => this.changeState(e, element, 'description')} value={element.description}></textarea>
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

            {this.renderExperience()}


        </div>
        )
    }
}



export default Experience
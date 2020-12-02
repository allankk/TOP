import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "education",
            education: [
                {
                    header: "master of scientology: 2004 - 2006",
                    school: "University 1"
                },
                {
                    header: "bachelors of religious affairs: 2000-2003",
                    school: "University 2"
                },
                {
                    header: "High school: 1999",
                    school: "My High School"
                }
            ]
        }
    }


    changeState(e, element, attribute) {
        if (attribute === 'main-title') {
            this.setState( { title: e.target.value } );                    
        } else {
            let edArr = [...this.state.education];

            edArr.forEach(stateElement => {
                if (stateElement === element) {
                    element[attribute] = e.target.value;
                }
            })

            this.setState({ education : edArr });
        }
    }

    removeItem(element) {
        let edArr = [...this.state.education];

        // reverse array loop for deleting an element
        for (let i = edArr.length-1; i >= 0; i-= 1) {
            if (edArr[i] === element) {
                edArr.splice(i, 1);
            }
        
        }

        this.setState({ education : edArr });
    }

    
    addItem() {
        let edArr = [...this.state.education];

        let newItem = {
            header: "degree: 2010-2012",
            school: "school/university"
        }

        edArr.push(newItem);

        this.setState( { education : edArr } );
    }


    renderEducation() {
        return(
            <div>
                {this.state.education.map((element, i) => {
                    return (
                        <div key={`ed-div-${i}`} className="content-item">
                            <button className="remove-btn" onClick={e => {this.removeItem(element)}}>x</button>
                            <input type="text" key={`ed-header-${i}`} className="education" spellCheck="false" onChange={e => this.changeState(e, element, 'header')} value={element.header}/>
                            <input type="text" key={`ed-school-${i}`} className="school" spellCheck="false" onChange={e => this.changeState(e, element, 'school')} value={element.school}/>
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

            {/* <h2 className="text-green">Education</h2> */}
            <button className="add-btn" onClick={e => {this.addItem()}}>+</button>

            {this.renderEducation()}
        </div>
        )
    }
}



export default Education
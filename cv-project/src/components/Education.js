import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: [
                {
                    header: "Veetehnika magister: 2017 - ...",
                    school: "Tallinna Tehnikaülikool"
                },
                {
                    header: "Magistritudeng ehitusinseneri õppes: 2018-2019",
                    school: "Budapest University of Technology and Economics"
                },
                                {
                    header: "MATERJALITEADUSE BAKALAUREUS: 2013 - 2016",
                    school: "Tartu Ülikool"
                },
                                {
                    header: "Keskkool: 2013",
                    school: "Tallinna Inglise Kolledž"
                }
            ]
        }
    }


    changeState(e, element, attribute) {
        let edArr = [...this.state.education];

        edArr.forEach(stateElement => {
            if (stateElement === element) {
                element[attribute] = e.target.value;
            }
        })

        this.setState({ education : edArr });
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
            <h2 className="text-green">Education</h2>

            {this.renderEducation()}
        </div>
        )
    }
}



export default Education
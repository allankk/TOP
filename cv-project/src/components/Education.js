import React from 'react';
import uniqid from "uniqid";

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: [
                {
                    header: "Veetehnika magister",
                    time: "2017 - ...",
                    description: '',
                    school: "Tallinna Tehnikaülikool"
                },
                {
                    header: "Magistritudeng ehitusinseneri õppes",
                    time: "2018 - 2019",
                    description: 'Vahetusprogramm 2018-2019 sügissemestril',
                    school: "Budapest University of Technology and Economics"
                },
                                {
                    header: "MATERJALITEADUSE BAKALAUREUS",
                    time: "2013 - 2016",
                    description: '',
                    school: "Tartu Ülikool"
                },
                                {
                    header: "Keskkool",
                    time: "2013",
                    description: '',
                    school: "Tallinna Inglise Kolledž"
                }
            ]
        }
    }

    renderEducation() {

        return(
            <div>
                {this.state.education.map(element => {
                    return (
                        <div key={uniqid()} className="content-item">
                            <h3 key={uniqid()} >{element.header}: {element.time}</h3>
                            {/* RETURN DESCRIPTION IF IT IS NOT EMPTY */}
                            {(() => {if (element.description !== '') {return <p key={uniqid()}>{element.description}</p>}})()}
                            <p key={uniqid()}>{element.school}</p>
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
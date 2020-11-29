import React from 'react';
import uniqid from "uniqid";

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            experience: [
                {
                    company: "Sweco Projekt AS",
                    title: "VK Tehnik",
                    time: "02.2018 - 09.2018, 02.2019 - ...",
                    description: "Erialaste probleemide lahendamine ja projektide koostamine vee- ja kanalisatsiooni valdkonnas koos juhendajaga. Lahenduste pakkumine ja klientidega konsulteerimine. Jooniste koostamine põhiliselt AutoCADis ja AutoCADi põhiste tarkvaradega (näiteks VK-torustikud). Põhjendatud muudatuste elluviimine koostatud projektides. Projektistaadiumis projektides osalemine ning erialastel koolitustel osalemine."
                },
                {
                    company: "Eesti Kaitsevägi",
                    title: "Ajateenija, Nooremseersant",
                    time: "07.2016-06.2017",
                    description: "Teenisin Eesti Kaitseväe Luurekompaniis 1. Jalaväebrigaadis, saavutades nooremseersandi auastme. Spetsialiseerusin sideallohvitseriks ning teenisin jaoülemana."
                }
            ]
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
            experience: [...this.state.experience]
        })
    }

    renderExperience() {

        return(
            <div>
                {this.state.experience.map(element => {
                    return (
                        <div key={uniqid()} className="content-item">
                            <h3 className="text-green" key={uniqid()}>{element.company}</h3>
                            <h3 key={uniqid()}>{element.title}: {element.time}</h3>
                            <p key={uniqid()}>{element.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    

    
    render() {
        return (
        <div className="content-main">
            <h2 className="text-green">Experience</h2>

            {this.renderExperience()}


        </div>
        )
    }
}



export default Experience
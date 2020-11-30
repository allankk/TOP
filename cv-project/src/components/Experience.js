import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: [
                {
                    company: "Sweco Projekt AS",
                    title: "VK Tehnik: 02.2018 - 09.2018, 02.2019 - ...",
                    description: "Erialaste probleemide lahendamine ja projektide koostamine vee- ja kanalisatsiooni valdkonnas koos juhendajaga. Lahenduste pakkumine ja klientidega konsulteerimine. Jooniste koostamine põhiliselt AutoCADis ja AutoCADi põhiste tarkvaradega (näiteks VK-torustikud). Põhjendatud muudatuste elluviimine koostatud projektides. Projektistaadiumis projektides osalemine ning erialastel koolitustel osalemine."
                },
                {
                    company: "Eesti Kaitsevägi",
                    title: "Ajateenija, Nooremseersant: 07.2016-06.2017",
                    description: "Teenisin Eesti Kaitseväe Luurekompaniis 1. Jalaväebrigaadis, saavutades nooremseersandi auastme. Spetsialiseerusin sideallohvitseriks ning teenisin jaoülemana."
                }
            ]
        }
    }

    changeState(e, element, attribute) {
        let expArr = [...this.state.experience];

        expArr.forEach(stateElement => {
            if (stateElement === element) {
                element[attribute] = e.target.value;
            }
        })

        // if dealing with textarea, resize it to fit contents
        if (e.target.localName == 'textarea') {
            e.target.style.height = 0;
            e.target.style.height = e.target.scrollHeight + 4 + 'px';
        }

        this.setState({ experience : expArr });
    }



    renderExperience() {
        return(
            <div>
                {this.state.experience.map((element,i) => {
                    return (
                        <div key={`e-div-${i}`} className="content-item">
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
            <h2 className="text-green">Experience</h2>

            {this.renderExperience()}


        </div>
        )
    }
}



export default Experience
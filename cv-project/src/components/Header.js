import React from 'react';
import uniqid from "uniqid";
// import HeaderPopup from "./HeaderPopup";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            showPopup: false,
            name: "John Doe",
            titles: "BUSINESS - TECHNOLOGY",
            contacts: '(+777) 512 345 67 - email@mail.com - linkedin.com/in/johndoe',
            description: 'This is an example profile. None of the information is true'
        }

        // this.togglePopup = this.togglePopup.bind(this);
    }

    renderContacts() {
        // push valid contacts into an array
        let contactsArr = [];

        if (this.state.phone !== '') contactsArr.push(this.state.phone);
        if (this.state.email !== '') contactsArr.push(this.state.email);
        this.state.links.forEach(elem => { if(elem !== '') contactsArr.push(elem)});
        
        return (
            <p>
                {contactsArr.map(element => {
                    if (contactsArr[contactsArr.length -1] === element) {
                        return (<span key={uniqid()}>{element}</span>)
                    } else {
                        return (<span key={uniqid()}>{element} - </span>)
                    } 
                })}
            </p>    
        )
    }

    // popup not used, kept here for possible future use.

    // togglePopup() {
    //     this.setState({
    //         showPopup: !this.state.showPopup,
    //     })
    // }

    render() {
        return(
            <div className="content-header">
                {/* NAME */}
                <h1><input className="edit text-green" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/></h1>
                {/* TITLES */}
                <span><input className="edit" id="titles" type="text" value={this.state.titles} onChange={e => this.setState({ titles: e.target.value })}/></span>

                {/* PHONE & LINKS */}
                <textarea className="edit" spellCheck="false" id="contacts" type="text" value={this.state.contacts} onChange={e => this.setState({ contacts: e.target.value })}/>

                {/* description */}
                <textarea className="edit" spellCheck="false" id="description" type="text" value={this.state.description} onChange={e => this.setState({ description: e.target.value })}/>

            </div>
        )
    }
}


export default Header;
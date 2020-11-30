import React from 'react';
import uniqid from "uniqid";
// import HeaderPopup from "./HeaderPopup";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            showPopup: false,
            name: "Allan Kossas",
            titles: "veetehnika - cad tehnoloogia",
            contacts: '(+372) 534 582 39 - allankossas@gmail.com - linkedin.com/in/allankossas',
            description: 'Lõpetanud magistriõppe veetehnika erialal "Hooned ja Rajatised" õppekaval'
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    // renderTitles(titlesArr) {
    //     return (
    //         <p className="uppercase">        
    //             {titlesArr.map(element => {
    //                 if (titlesArr[titlesArr.length -1] === element) {
    //                     return (<span key={uniqid()}><input />{element}</span>)
    //                 } else {
    //                     return (<span key={uniqid()}>{element} - </span>)
    //                 } 
    //             })}
    //         </p>
    //     )
    // }

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

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        })
    }

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
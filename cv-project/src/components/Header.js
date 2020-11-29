import React from 'react';
import uniqid from "uniqid";
import HeaderPopup from "./HeaderPopup";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            showPopup: false,
            name: "Allan Kossas",
            titles: ['veetehnika', 'cad tehnoloogia'],
            phone: '(+372) 534 582 39',
            email: 'allankossas@gmail.com',
            links: ['linkedin.com/in/allankossas'],
            description: 'Lõpetanud magistriõppe veetehnika erialal "Hooned ja Rajatised" õppekaval'
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    renderTitles(titlesArr) {
        return (
            <p className="uppercase">        
                {titlesArr.map(element => {
                    if (titlesArr[titlesArr.length -1] === element) {
                        return (<span key={uniqid()}>{element}</span>)
                    } else {
                        return (<span key={uniqid()}>{element} - </span>)
                    } 
                })}
            </p>
        )
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

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        })
    }

    render() {
        return(
            <div className="content-header">
                {/* NAME */}
                <h1 className="text-green">{this.state.name}</h1>
                {/* TITLES */}
                {this.renderTitles(this.state.titles)}

                {/* PHONE & LINKS */}
                {this.renderContacts()}

                {/* description */}
                { (() => {
                    if (this.state.description !== '') { 
                        return <p>{this.state.description}</p> 
                    } 
                    }) 
                    ()
                }

                <button id="edit" onClick={this.togglePopup}>edit</button>

                {this.state.showPopup ? <HeaderPopup /> : null}

            </div>
        )
    }
}

export default Header;
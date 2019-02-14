import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import contacts from '../../data/contacts'

const htmlArray = [];
let currentlySelectedContactIndex = 0;

const handleContactClick = (index) => {
    currentlySelectedContactIndex = index;
    render();
};

contacts.forEach((contact, index) => {
    htmlArray.push(<div onClick={() => handleContactClick(index)} key={index} className="contact" data-id="id">
            <span className="avatar small">&#9787;</span>
            <span className="title">{contact.firstName} {contact.lastName}</span>
        </div>
    )
});

const Book = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <div className="content">
                    <h1>Contacts</h1>
                    <Contacts/>
                </div>
            </div>
            <div id="details">
                <Details index={currentlySelectedContactIndex}/>
            </div>
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>
    </div>
);

const Contacts = () => (
    htmlArray
);

const Details = (prop) => (
    <div className="content">
        <h1>Details</h1>
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
                <span className="name">{contacts[prop.index].firstName}</span>
                <span className="name">{contacts[prop.index].lastName}</span>
            </div>
        </div>
        <div className="info">
            <span className="info-line">&phone; {contacts[prop.index].phone}</span>
            <span className="info-line">&#9993; {contacts[prop.index].email}</span>
        </div>
    </div>
);

const render = () => ReactDOM.render(
    <Book/>,
    document.getElementById('root')
);

render();
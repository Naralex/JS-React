import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import contacts from "./data/contacts";

let currentlySelectedContactIndex = 0;

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

const Contacts = () => (contacts.map((contact,index) =>
    <div onClick={() => handleContactClick(index)} key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>)
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
            <span className="info-line">☎ {contacts[prop.index].phone}</span>
            <span className="info-line">✉ {contacts[prop.index].email}</span>
        </div>
    </div>
);

const render = () => ReactDOM.render(
    <Book/>,
    document.getElementById('root')
);

const handleContactClick = (index) => {
    currentlySelectedContactIndex = index;
    render();
};

render();

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//         serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';

function renderApp(){
    ReactDOM.render(
        <Header />,
        document.getElementById('root')
    );
}

let headerName = 'Hello';

const handleNavLinkClick = (event) =>{
    event.preventDefault();
    // console.log(event.target.innerHTML);
    const content = event.target.innerHTML;

    headerName = content;
    renderApp();
};

const Hello = () => {
    return (
        <div className={"some-class-name"} id="some-id">
            <h1>{headerName}</h1>
        </div>
    );
};

const Navigation = () => {
    const className = 'nav-link';
    const linkClassName = `${className}-link`;

    return (
        <nav className={className}>
            <ul>
                <li><a className={linkClassName} href={"/"} onClick={handleNavLinkClick}>Home</a></li>
                <li><a className={linkClassName} href={"/contact"} onClick={handleNavLinkClick}>Contact us</a></li>
                <li><a className={linkClassName} href={"/about"} onClick={handleNavLinkClick}>About</a></li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return(
        <header>
            <Hello />
            <Navigation/>
        </header>
    )
};

renderApp();

export default App;
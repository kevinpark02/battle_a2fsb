import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="home-nav">
            <div className="left-nav">
                <Link to="/"><h1 className="title-nav">Battle Santa Barbara</h1></Link>
                <img className="logo" src={window.ucsblogo} alt="ucsblogo"/>
                <img className="logo" src={window.westmontlogo} alt="westmontlogo"/>
            </div>
            <div className="auth-nav">
                <li className="blue-btn"><Link to="/signup">Sign Up</Link></li>
                <li className="yellow-btn"><Link to="/login">Log In</Link></li>
            </div>
        </div>
    );

    return(
        <header>
            <div>
                {greeting}
            </div>
        </header>
    )
}

export default Greeting; 

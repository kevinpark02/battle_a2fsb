import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="logged-nav">
            <div className="logged-left">
                <div className="blue-btn"><Link to="/home">Home</Link></div>
                <div className="blue-btn"><Link to="/profile">Profile</Link></div>
            </div>
            <div className="logged-middle">
                <p>Welcome to the Battle Ground</p>
            </div>
            <div className="logged-right">
                <p>Hello, {currentUser.username}</p>
                <div onClick={logout} className="yellow-btn">Log Out</div>
            </div>
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

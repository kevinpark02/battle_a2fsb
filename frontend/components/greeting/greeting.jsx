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
            <Link to="/"><h1>Battle A2F SB</h1></Link>
            <div className="auth-nav">
                <Link to="/sigup">Sign Up</Link>
                <Link to="/login">Log In</Link>
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

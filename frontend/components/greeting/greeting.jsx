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
            <Link to="/"><h1>Battle a2f SB</h1></Link>
            <div className="auth-nav">
                <li className="blue-btn"><Link to="/sigup">Sign Up</Link></li>
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

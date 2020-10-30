import React from "react";


export const Signup = ({handleLogout}) => {
    return (
        <header className="App-header">
            <div className="App-logo">
                <h1>Water your plants</h1>
                <a href="#link-login"><div className="App-btn-login"><button onClick={handleLogout}>Log out</button></div></a>
            </div>
        </header>
    );
}





export default Signup;
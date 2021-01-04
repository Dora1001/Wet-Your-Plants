import React from 'react';

const Form = (props) => {
    const {
        email, setEmail, password, setPassword, handleLogin,
        handleSignUp, hasAccount, setHasAccount, emailError, passwordError
    } = props;


    return (

        <section id="link-login" className="login">
            <div className="login-header"> <h1>Sign up to use app</h1></div>

<div className="loginContainer">
    <label>Username</label>
    <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}
    />
    <p className="errorMsg">{emailError}</p>
    <label>Password</label>
    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
    <p className="errorMsg">{passwordError}</p>
    <div className="btnContainer">
        {hasAccount ? (
            <>
            <button className="form-login-btn"  onClick={handleLogin}>Sign in</button>
                <p>Don't have account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
        ) : (
            <>
                <button className="form-login-btn" onClick={handleSignUp}>Sign up</button>
                <p>Have an account?<span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
            </>
        )}

    </div>
</div>

        </section>

    );
};


export default Form;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [credential, setCredential] = useState('');
    if (sessionUser) return <Redirect to="/locations" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };


    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="signup-items">
                <label id="email-field">
                    Email
                    <input
                        type="text"
                        className="input-box-signup"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="signup-items">

                <label id="username-field">
                    Username
                    <input
                        type="text"
                        className="input-box-signup"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="signup-items">

                <label id="password-field">
                    Password
                    <input
                        type="password"
                        className="input-box-signup"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="signup-items">

                <label id="confirm-password-field">
                    Confirm Password
                    <input
                        type="password"
                        className="input-box-signup"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="signup-items">
                <div className="sign-in-buttons">
                <button type="submit" id="signup-button" className="user-listings-delete-button">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default SignupFormPage;

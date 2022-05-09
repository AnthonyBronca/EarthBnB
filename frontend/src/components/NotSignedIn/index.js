import React from "react";
import { useHistory } from "react-router-dom";

function NotSignedIn () {
    const history = useHistory();

    const redirectToSignUp = (e) =>{
        e.preventDefault();
        history.push('/signup')
    }


    return (
        <div className="not-signed-in-box">
            <h1>It looks like are not currently signed in. Please Log In or Sign Up to view this page</h1>
            <div className="buttons-box">
                <button className="user-listings-delete-button" onClick={(e)=> redirectToSignUp(e)}>Sign Up</button>

            </div>
        </div>
    )

}


export default NotSignedIn

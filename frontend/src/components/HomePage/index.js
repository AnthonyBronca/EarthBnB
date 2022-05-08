import React from "react";
import { useHistory } from "react-router-dom";
import './index.css'


function HomePage() {

    const history = useHistory();

    const curiousityButton = () => {
        history.push('/locations')
    }

    return (
        <div>
            <div className="black-box">
            <div className="help-ukraine">
                <div className="inner-help-ukraine">
                <a className="learn-more" href="https://www.airbnb.org/help-ukraine?locale=en&_ga=2.183346342.1242383136.1651902100-522967509.1649654713">Learn More</a>
                <h1>Help house 100,000 refugees fleeing Ukraine</h1>
                </div>
            </div>
            </div>
            <div className="inspiration-box">
            <img src="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=1200"></img>
            <p>Let your curiousity do the booking</p>
            <button className="curiousity-button" onClick={(e)=> curiousityButton()}>I'm Flexible</button>
            </div>
            <div>
                <p>Languages/Frameworks Used In Project</p>
                <ul>
                    <ul>Javascript</ul>
                    <img className="language-logo" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"></img>
                    <ul>React</ul>
                    <img className="language-logo" src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"></img>
                    <ul>Redux</ul>
                    <img className="language-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"></img>
                    <ul>Express</ul>
                    <img className="language-logo" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"></img>
                    <ul>CSS</ul>
                    <img className="language-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
                </ul>
            </div>
            <div typeof="footer">
                <h3 className="footer-header">Contact Info</h3>
                <ul>
                    <ul className="footer-uls">Anthony Bronca</ul>
                    <ul className="footer-uls">Bronca1768@gmail.com</ul>
                    <ul className="footer-uls">Orlando,Fl</ul>
                </ul>
                <h3 className="footer-header">About Me</h3>
                <ul>
                <ul className="footer-uls">GitHub</ul>
                <ul className="footer-uls">LinkedIn</ul>
                </ul>
                <h3 className="footer-header">Languages/FrameWorks Used</h3>
                <ul>
                    <ul className="footer-uls">JavaScript</ul>
                    <ul className="footer-uls">React</ul>
                    <ul className="footer-uls">Redux</ul>
                    <ul className="footer-uls">CSS</ul>
                    <ul className="footer-uls">Express</ul>
                    <ul className="footer-uls">HTML</ul>
                </ul>
                <h3 className="footer-header">About</h3>
                <p className="about-me-paragraph">This project is made as a clone of AirBNB. I am not associated or affilaited with AirBnB. The logo and site design were cloned from AirBnB and I do not own the rights to these intellectual properites
                    This project was made as a project assignment during my time at App Academy, as we learn React/Redux
                </p>
            </div>
        </div>
    )

}

export default HomePage

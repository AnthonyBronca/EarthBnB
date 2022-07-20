import React from "react";
import { useHistory } from "react-router-dom";
import './index.css'


function HomePage() {

    const history = useHistory();

    const curiousityButton = () => {
        history.push('/locations')
    }

    return (
        <div className="full-body-splash">
            <div className="page-container-splash">
                <div className="black-box">
                    <div className="test-box">test</div>
                    <div className="help-ukraine">
                        <div className="inner-help-ukraine">
                            <h1>Help house 100,000 refugees fleeing Ukraine</h1>
                            <div className="learn-more-box">
                                <span className="random-span">
                                    <a className="learn-more" href="https://www.airbnb.org/help-ukraine?locale=en&_ga=2.183346342.1242383136.1651902100-522967509.1649654713">Learn More</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inspiration-box">
                    <img className='camp-img' src="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=1200"></img>
                    <h1 className="curiousity-text">Let your curiousity do the booking</h1>
                    <button className="curiousity-button" onClick={(e) => curiousityButton()}><p className="button-text">I'm Flexible</p></button>
                </div>
            </div>
            <div>
                <h1 className="languages-header">Languages/Frameworks Used In Project</h1>
                <div className="logo-container">
                    <img className="language-logo" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"></img>
                    <img className="language-logo" src="https://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png"></img>
                    <img className="language-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"></img>
                    <img className="language-logo" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"></img>
                    <img className="language-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
                </div>
                <div className="language-text">
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Express</p>
                    <p>CSS</p>
                </div>

            </div>
            <div typeof="footer" className="footer-elements-background">
                <div className="footer-elements">
                <h3 className="footer-header-h1">Contact Info</h3>
                <ul>
                    <ul className="footer-uls">Anthony Bronca</ul>
                    <ul className="footer-uls">Bronca1768@gmail.com</ul>
                    <ul className="footer-uls">Orlando, Florida</ul>
                </ul>
                <h3 className="footer-header-h2">About Me</h3>
                <ul>
                    <a className="footer-as" href='https://github.com/AnthonyBronca'>GitHub</a>
                    <a className="footer-as" href="https://www.linkedin.com/in/anthonybronca/">LinkedIn</a>
                </ul>
                <h3 className="footer-header-h3">Languages/FrameWorks Used</h3>
                <ul>
                    <ul className="footer-uls">JavaScript</ul>
                    <ul className="footer-uls">React</ul>
                    <ul className="footer-uls">Redux</ul>
                    <ul className="footer-uls">CSS</ul>
                    <ul className="footer-uls">Express</ul>
                    <ul className="footer-uls">HTML</ul>
                </ul>
                <h3 className="footer-header-h4">About/Disclaimer</h3>
                <p className="about-me-paragraph">This project is made as a clone of AirBNB. I am not associated or affilaited with AirBnB. The logo and site design were cloned from AirBnB and I do not own the rights to these intellectual properites
                    This project was made as a project assignment during my time at App Academy, as we learn React/Redux
                </p>
                </div>
            </div>
        </div>
    )

}

export default HomePage

import React from 'react';
import apiCert from '../../images/apis-and-micro.png';
import backCert from '../../images/back-end.png';
import dataViz from '../../images/data-viz.png';
import frontEndLib from '../../images/front-end-lib.png';
import frontEnd from '../../images/front-end.png';
import infoSecurity from '../../images/info-security.png';
import jsAlgo from '../../images/js-algo.png';
import responsiveWeb from '../../images/responsive-web.png';
import './about-me.scss';
import CertModal from './subcomponents/CertModal';
//Add codesignal score/profile
class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            currentImage: apiCert
        }
        this.toggleCertModal = this.toggleCertModal.bind(this);
    }
    toggleCertModal(image) {
        if(!this.state.showModal && image) {
            this.setState({currentImage: image, showModal: true});
            document.body.style.overflow = "hidden";
        }
        else {
            this.setState({showModal: false});
            document.body.style.overflow = "initial";
        }
    }
    render() {
        return (
            <div className="about-me-section">
            <CertModal showModal={this.state.showModal}
                       image={this.state.currentImage}
                       toggleCertModal={this.toggleCertModal}/>
                <div className="about-me-section-header">
                    <div className="about-me-info">
                        <h1>Rob Bertram</h1>
                        <h3>Front End Web Developer</h3>
                    </div>
                    <div className="about-me-logo-wrap">
                        <img className="about-me-logo vue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png" />
                        <img className="about-me-logo react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
                    </div>
                </div>
                <div className="about-me-skillset">
                    <h3>
                        Core Skillset:
                    </h3>
                    <ul>
                        <li>React</li>
                        <li>VueJS</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Webpack</li>
                        <li>NodeJS/Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <h4 className="about-me-codesignal"><a target="_blank" href="https://app.codesignal.com/profile/rob_b17">CodeSignal Coding Score: 764 (Top 5%)</a></h4>
                <p>
                    I am front end developer with a passion for JavaScript front end frameworks such as VueJS and React.
                    I enjoy creating SPA applications most and enjoy providing the very best user experience possible. As 
                    a front end developer, it is important to me to have expert proficiency with HTML, CSS, and JavaScript.
                </p>
                <p>
                    I believe that scalability and extendability is where code becomes an art. When another developer comes to an
                    application that I've built, I always hope they find my code neatly abstracted and easy to edit.
                </p>
                <p>
                    Keeping my skills sharp is a priority for me. I spend two to three hours per night practicing in one form
                    or another. While I lack years in terms of professional experience, I consistently work toward developing at 
                    a senior developer level.
                </p>
                <p className="about-me-paragraph-border-bottom">
                    The most fun part of my job is being part of a team. Nothing beats the chance to be on a team where everyone 
                    has respectable strengths and original ideas. I do my very best to learn what I am able from my teammates and
                    am eager to share things I've picked up that I believe are useful.
                </p>
                <h3>
                    Certificates:
                </h3>
                <div className="about-me-certificates">
                    <img onClick={this.toggleCertModal.bind(this, frontEndLib)} src={frontEndLib} />
                    <img onClick={this.toggleCertModal.bind(this, frontEnd)} src={frontEnd} />
                    <img onClick={this.toggleCertModal.bind(this, apiCert)} src={apiCert} />
                    <img onClick={this.toggleCertModal.bind(this, backCert)} src={backCert} />
                    <img onClick={this.toggleCertModal.bind(this, dataViz)} src={dataViz} />
                    <img onClick={this.toggleCertModal.bind(this, infoSecurity)} src={infoSecurity} />
                    <img onClick={this.toggleCertModal.bind(this, jsAlgo)} src={jsAlgo} />
                    <img onClick={this.toggleCertModal.bind(this, responsiveWeb)} src={responsiveWeb} />
                </div>
            </div>
        )
    }
}

export default AboutMe;
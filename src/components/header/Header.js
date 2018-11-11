import React from 'react';
import './header.scss';

class Header extends React.Component {
    render(){
        return(
            <div className="header-main-wrap">
                <ul className="header-ul">
                    <li>Articles</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>About Me</li>
                </ul>
            </div>
        )
    }
}

export default Header;
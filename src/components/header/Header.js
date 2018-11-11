import React from 'react';
import { BrowserRouter as Router, Link, Route, withRouter, Redirect, Switch } from 'react-router-dom'
import './header.scss';

class Header extends React.Component {
    render(){
        return(
            <div className="header-main-wrap">
                <ul className="header-ul">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/articles'><li>Articles</li></Link>
                    <li>Projects</li>
                    <li>About Me</li>
                </ul>
            </div>
        )
    }
}

export default Header;
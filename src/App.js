import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Link, Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Home from './components/homepage/Home';
import Header from './components/header/Header';
import Articles from './components/articles/Articles';
import Projects from './components/projects/Projects';
import AboutMe from './components/about-me/AboutMe';


class App extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/articles' component={Articles}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/about-me' component={AboutMe}/>
                    {/*TODO: Add 404 Page */}
                </Switch>
            </div>
        )
    }
}

export default App;
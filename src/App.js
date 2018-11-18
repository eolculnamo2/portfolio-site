import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Link, Route, withRouter, Redirect, Switch } from 'react-router-dom'
import {Helmet} from "react-helmet";
import Home from './components/homepage/Home';
import Header from './components/header/Header';
import Articles from './components/articles/Articles';
import Article from './components/articles/article/Article'
import Projects from './components/projects/Projects';
import AboutMe from './components/about-me/AboutMe';


class App extends React.Component {
    render(){
        return(
            <div>
                <Helmet>
                    <meta name="keywords" content="Rob Bertram Front End Web Developer"></meta>
                    <meta name="description" content="Rob Bertram is a front end web developer out of McKinney, TX."></meta>
                    <title>Rob Bertram Web Developer</title>
                </Helmet>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/articles' component={Articles}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/about-me' component={AboutMe}/>
                    <Route exact path='/vue-basics' component={Article}/>
                    <Route exact path='/article/:article' render={ props => (
                            <Article {...props}/>
                        )} />
                    {/*TODO: Add 404 Page */}
                </Switch>
            </div>
        )
    }
}

export default App;
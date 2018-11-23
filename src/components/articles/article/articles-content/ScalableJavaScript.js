import React from 'react';
import {Helmet} from "react-helmet";

const ScalableJavaScript = () => {
    return(
        <div>
            <Helmet>
                <meta name="keywords" content="Scalable Front End JavaScript Frameworks"></meta>
                <meta name="description" content="Create a scalable component based front end application."></meta>
                <title>Building Scalable Projects with Front End JavaScript Frameworks</title>
            </Helmet>
            <div className="article-title-wrap">
                <h1>Building Scalable Projects with Front End JavaScript Frameworks</h1>
                <h4>Rob Bertram</h4>
                <em>Article Not Complete</em>
            </div>
            <p>Front end web development is dramatically different than it used to be thanks to front end frameworks. A part of becoming proficient as a front end developer is learning to skillfully construct a file system that is maintainable and scalable. For anyone who has worked with a large and complicated front end code base, you’ll be able to relate to the feeling of having to do things over and over again, finding excessive amounts of copied and pasted code, and different functions in different places which ultimately do the same thing. This article offers strategies to help avoid this kind of code structure on the front end.</p>
            <img className="article-scalable" src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            
            <h2>Abstraction</h2>
            <p>Abstraction is simple enough to understand. It means representing complex things in simple terms in our code base. In practical terms, this means moving the messy and detailed parts of our functions into a shared file where they can be defined and reused. Here are a few strategies to help with abstraction.</p>
            
            <h3>1) Try Using Services Files</h3>
            <p>A great way to use abstraction is by using services files. A services JavaScript file centralizes commonly used functions by exporting them to different components in the file system. For example, I may have a services file which holds commonly used JavaScript validations and another which holds commonly used animations functions. When such a file exists, it can do a number of things for us:</p>

            <ol>
                <li>It provides your team with reliable functions that have worked in the past which means you have confidence in the function you use</li>
                <li>It is easier to fix bugs because you do not have to fix the code in every place the function appears (which could involve reading several different versions of the same function, repeatedly testing it, and worrying that you’re not able to account for every place the logic is used)</li>
                <li>The implementation of code which calls on services is much cleaner and easy to follow because it tells you what each piece does without having to read through the inner workings of the function.</li>
            </ol>

            <p>As with most of what will be discussed in this article, it is important to be thoughtful about when to use and not to use a services file. Proper employment of this strategy involves intentionally deciding how functions will be grouped and how often a function must occur to abstract a function out of the component. In other words, dumping logic into one file and having every single other file share it on our site is not a good solution.</p>
            <p>If your team is not using services styled JS files in your application then you’re likely missing out on a simple way to start making your code maintainable. For projects of any significant size, having a file with commonly used JavaScript functions is simply a must.</p>

            <h3>2) Try Making Your Components Configurable</h3>
            <p>Front end frameworks are incredibly useful in the way they allow us to create reusable components. Too often, this reusability is not used enough because developers opt to create completely new components for variants of the same UI and logic. An example of this is when there is a component for a form. This form may have 5 inputs and require padding of 4em. A similar form is required except this form has 7 inputs with padding of 2em and margin of 2em. The two components in other regards are the same - The form heading is in the same place, the submit button looks the same, the explanation text (although worded differently) is in the same place with the same style.</p>
            <p>Rather than creating two components, you can make the component itself configurable.  First you make the classes and styling conditional on the props that are passed. You can do this with [LINK]inline styling and classes which go easily with ternary expressions. An example of this with React syntax would like this:</p>

            <span className="article-code-block">
                &lt;{'div class={{padding: this.props.variant1 ? “4em” : “2em”}}'}&gt;&lt;/div&gt;
            </span>

            <p>In a similar fashion, we can pass an array of objects through our props to feed the input information. In React it could look like this.</p>

            <span className="article-code-block">
                <div>{'this.props.inputObj.map( x => {'}</div>
                    <div className="indent-1">{'return(<div><span>{x.inputHeading}</span><input id={x.inputId}/></div>)'}</div>
                <div>});</div>
            </span>

            <p>The implementation of how you want to store the configurable props is up to you. In the past, I’ve created a configuration file which exports arrays of objects which are passed to props so that the component can iterate through them.</p>
            <p>There are several benefits to this approach.</p>
            <p>One benefit is that the UI within similar components is meant to be similar and that if something needs changed, it is likely that it will need to be changed for all components. With this approach, you only need to change the code in one place rather than trying to track down all the variations of the component that needs to change.</p>
            <p>Another benefit is that it allows development of future UI to move from creating all aspects of a new component to simply updating a configuration. If you do this with a configuration JS file, it becomes as simple as updating an array of objects rather than the many details that come with developing a new component.</p>
            <p>It is obvious that this approach can get messy fast within the component itself. There are definitely situations where this is not the best idea. If a component requires too many configurations, it is usually for the best that a separate component is made rather than trying to force a single component to hold too many possible options for its presentation and logic. On the flip side, if you make a component that has some mess but such that it is bearable, it might still be justified if the majority of the development can be freed to operate within the configurations passed to the component rather than the component itself.</p>

            <h3>3) Mixins</h3>
            <p>A third way to abstract your code is to use mixins. A mixin is seamlessly integrated into your component such that data, state, functions, etc. from the mixin all become readily available in your component. For example, you may have 5 components that all share the need for the same 3 functions and 10 variables. You could create a mixin that contained these common functions and variables and pass the mixin to the 5 components. In doing so, you’ve created a situation where you only need to write the shared logic and functions once rather than 5 separate times.</p>
            <p>As with everything discussed on in this article, mixins should be used with caution. An <a href="https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html">excellent article</a> was written by a member of the Facebook React team. In this article, he speaks to several scenarios in which mixins have been a detriment to teams using them. The three main reasons are 1) that they introduce implicit dependencies, 2) they create name clashes, and 3) they create snowballing complexity.</p>
            <p>Essentially, he points out that if you create too many mixins, everything becomes complex and unreadable. Your code becomes nearly impossible for new team members to make sense of and everyone is afraid to delete or rename anything because they have a hard time mapping all the different places where variables and functions are used.</p>
            <p>The solution to this is to keep mixins simple. I have not used mixins with React, but with VueJS, I’ve noticed that creating one mixin for a set of common components can be extremely useful in increasing the scalability of my web applications.</p>
        </div>
    )
}

export default ScalableJavaScript;
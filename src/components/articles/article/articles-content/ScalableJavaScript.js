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
            </div>
            <p>Front end web development is dramatically different than it used to be thanks to front end frameworks. A part of becoming proficient as a front end developer is learning to skillfully construct a file system that is maintainable and scalable. For anyone who has worked with a large and complicated front end code base, you’ll be able to relate to the feeling of having to do things over and over again, finding excessive amounts of copied and pasted code, and different functions in different places which ultimately do the same thing. This article offers strategies to help avoid this kind of code structure on the front end.</p>
            <img className="article-scalable" src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            
            <h2>What is abstraction?</h2>
            <p>This article is really about scalability through abstraction. Abstraction is simple enough to understand. It means representing complex things in simple terms in our code base. In practical terms, this means moving the messy and detailed parts of our functions into a shared file where they can be defined and reused. This task can be difficult because it involves organizing code before it is fully written. However, it is incredibly important as your project becomes larger because it makes large complicated code manageable and scalable.</p>
            <p>Here are a few strategies to help with abstraction.</p>

            <h3>1) Try Placing Commonly Used Functions in Separate Files</h3>
            <p>A great way to use abstraction is by using setting aside JS files to hold commonly used functions. This kind of JS file centralizes commonly used functions by exporting them to different components in the file system. For example, I may have a JavaScript file which holds commonly used JavaScript validations and another which holds commonly used animations functions. When such a file exists, it can do a number of things for us:</p>

            <ol>
                <li>It provides your team with reliable functions that have worked in the past which means you have confidence in the function you use</li>
                <li>It is easier to fix bugs because you do not have to fix the code in every place the function appears (which could involve reading several different versions of the same function, repeatedly testing it, and worrying that you’re not able to account for every place the logic is used)</li>
                <li>The implementation of code which calls on the separate JS file is much cleaner and easier to follow because it tells you what each function does without having to read through the inner workings of the function.</li>
            </ol>

            <p>As with most of what will be discussed in this article, it is important to be thoughtful about when to use and not to separate your function into this kind of file. Proper employment of this strategy involves intentionally deciding how functions will be grouped and how often a function must occur to abstract a function out of the component. In other words, dumping logic into one file and having every single other file share it on our site is not a good solution.</p>
            <p>If your team is not using this strategy in your application then you’re likely missing out on a simple way to start making your code maintainable. For projects of any significant size, having a file with commonly used JavaScript functions is simply a must.</p>

            <h3>2) Try Making Your Components Configurable</h3>
            <p>Front end frameworks are incredibly useful in the way they allow us to create reusable components. Too often, this reusability is not used enough because developers opt to create completely new components for variants of the same UI and logic. An example of this is when there is a component for a form. This form may have 5 inputs and require padding of 4em. A similar form is required except this form has 7 inputs with padding of 2em and margin of 2em. The two components in other regards are the same - The form heading is in the same place, the submit button looks the same, the explanation text (although worded differently) is in the same place with the same style.</p>
            <p>Rather than creating two components, you can make the component itself configurable.  First you make the classes and styling conditional on the props that are passed. You can do this with <a href="https://reactjs.org/docs/dom-elements.html">inline styling and classes</a> which go easily with ternary expressions. An example of this with React syntax would like this:</p>

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
            
            <em className="article-block">Example of Configurable Components</em><br/>
            <iframe src="https://codesandbox.io/embed/4lqr7lmk30" style={{width: '100%;'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
            
            <p>There are several benefits to this approach.</p>
            <p>One benefit is that the UI within similar components is meant to be similar and that if something needs changed, it is likely that it will need to be changed for all components. With this approach, you only need to change the code in one place rather than trying to track down all the variations of the component that needs to change.</p>
            <p>Another benefit is that it allows development of future UI to move from creating all aspects of a new component to simply updating a configuration. If you do this with a configuration JS file, it becomes as simple as updating an array of objects rather than the many details that come with developing a new component.</p>
            <p>It is obvious that this approach can get messy fast within the component itself. There are definitely situations where this is not the best idea. If a component requires too many configurations, it is usually for the best that a separate component is made rather than trying to force a single component to hold too many possible options for its presentation and logic. On the flip side, if you make a component that has some mess but such that it is bearable, it might still be justified if the majority of the development can be freed to operate within the configurations passed to the component rather than the component itself.</p>

            <h3>3) Try Mixins</h3>
            <p>A third way to abstract your code is to use mixins. A mixin is seamlessly integrated into your component such that data, state, functions, etc. from the mixin all become readily available in your component. For example, you may have 5 components that all share the need for the same 3 functions and 10 variables. You could create a mixin that contained these common functions and variables and pass the mixin to the 5 components. In doing so, you’ve created a situation where you only need to write the shared logic and functions once rather than 5 separate times.</p>
            <p>As with everything discussed on in this article, mixins should be used with caution. An <a href="https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html">excellent article</a> was written by a member of the Facebook React team. In this article, he speaks to several scenarios in which mixins have been a detriment to teams using them. The three main reasons are 1) that they introduce implicit dependencies, 2) they create name clashes, and 3) they create snowballing complexity.</p>
            <p>Essentially, he points out that if you create too many mixins, everything becomes complex and unreadable. Your code becomes nearly impossible for new team members to make sense of and everyone is afraid to delete or rename anything because they have a hard time mapping all the different places where variables and functions are used.</p>
            <p>The solution to this is to keep mixins simple. I have not used mixins with React, but with VueJS, I’ve noticed that creating one mixin for a set of common components can be extremely useful in increasing the scalability of my web applications.</p>
        
            <h3>4) Try Classes</h3>
            <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Classes in JavaScript</a> are an excellent way to abstract code. Generally when people talk about organizing information into classes/objects, they speak to the benefits of grouping relevant data and functions together. In a sense, we can effectively use classes to organize and increase readability of our code by bundling necessary data and functions together for a particular use.</p>
            <p>This is easier to understand by a relevant example.</p>
            <p>Suppose there is an already complicated form that must be completed by the user. The UI is dynamic meaning that only the fields that require a response will display. There are 5 rules that govern which fields to display. Each rule takes into account 10 different pieces of information.</p>
            <p>If we were to just add this to our list of functions and variables, it would badly clutter our already complicated JavaScript file. Trying to read and take into account everything that has to do with the rules in place becomes difficult and frustrating to not only initially develop, but also to go back and make changes to. If you’ve worked with large JavaScript files before, you know what I’m talking about.</p>
            <p>To solve this, we can create a JavaScript class which can collect the 10 pieces of information and feed them into functions within the class to tell us which rule returns true. Any other needed functions or relevant data that may come up during the development process can be fed into this class as well.</p>
            <p>The benefit to this approach is that I know exactly where to look for all functions and data related to these rules. In the main JavaScript file, I can now simply instantiate the rule class and use one of the functions from within the class to get the current rule. I no longer have to scan the entire JavaScript file to look for functionality that I know I need and don’t have to worry that it may or may not exist simply because I cannot find it. I can go to my class and find the function I need and call it in the JS file.</p>
        
            <h2>Communication and Teamwork are Essential</h2>
            <p>You probably came to this page looking for examples of scalable JavaScript. I believe we’ve covered good ways to do this, but believe me, all of them will fail if teamwork and communication fail. The very most important part of building scalable web apps is that all team members are on the same page. What this means is that everyone is informed of strategies and protocols that are in place to help maintain a well built web app.</p>
            <p>Imagine a team that does not adequately communicate. Each developer will do things different ways. They may apply strategies for well organized and scalable code, but when multiple developers do this without knowing what the others are doing, it becomes messy because they all do different things. The code becomes illogical. Multiple functions do the same thing in different ways and must be changed in multiple and sometimes unpredictable places in order to make changes at scale.</p>
            <p>My opinion is this: the number one rule for clean and scalable code is that all developers are informed and that they all have a common understanding of what the organization of the team looks like.</p>
            <p>This kind of communication can take different forms.</p>
            <p>For smaller teams, it means being close knit and speaking with one another often about the code that is written. Everyone will get a chance to review everyone else’s code and offer honest feedback and humbly accept suggestions to improve submitted work. When a new project is started, all team members meet and create a tentative game plan that can be changed, but must be discussed when changed.</p>
            <p>For larger teams, it means there are senior developers that create a structure for the code base and communicate the expectations to the rest of the team. There is also a process for code to be reviewed before being pushed to quality assurance in order to ensure that the code stays organized (sometimes it is hard to justify spending time refactor working code after it goes to production even if it is sloppy).</p>
            
            <p>Overall, with UI/UX becoming more complicated, it is important to carefully consider the scalability for our JavaScript. I hope my thoughts were helpful for you and that you can take something from this page to your development team to improve your own projects.</p>
        </div>
    )
}

export default ScalableJavaScript;
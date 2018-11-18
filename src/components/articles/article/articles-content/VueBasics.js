import React from 'react';
import {Helmet} from "react-helmet";
import '../../articles.scss';

const VueBasics = () => {
    return (
<div>
    <Helmet>
        <meta name="keywords" content="Vue VueJS Getting started with Vue VueJS for Beginners Vue Basics"></meta>
        <meta name="description" content="A no non-sense guide to getting start with VueJS right away."></meta>
        <title>VueJS Basics: The Vue Instance and The Basics of Components</title>
    </Helmet>
    <div className="article-title-wrap">
        <h1>VueJS Basics: The Vue Instance and The Basics of Components</h1>
        <h4>Rob Bertram</h4>
    </div>
    <p>The goal of this article is to give a brief introduction to the key features of VueJS. If you're like me, you want the very basics of how to get started with a technology so that you can begin building and experimenting right away (its the best way to learn). This tutorial offers you a simple example of the core basics of Vue without spending time on parts that are not essential to building your first app.</p>
    <p>For the sake of brevity, I do not cover set up with Vue. For this, I recommend using the <a href="https://vuejs.org/v2/guide/" target="_blank">Vue CDN or Vue CLI to get started</a>. Alternatively, you can skip this for now and simply <a href="https://codepen.io/eolculnamo2/pen/ZmJMPo" target="_blank">use the pen</a> below to practice before learning to set up your environment. This is a good option if you just want to see what Vue is about. If you love it (a lot of developers do), then go back later and learn the set up.</p>
    <p>    
        This article will first cover the Vue Instance and then how to extend much of its functionality into manageable components. 
    </p>

    <img className="article-vue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png" />
    
    <h3>The Vue Instance</h3>

    <p>Throughout this section, I encourage you to use this pen as a reference to get you started. It has examples of all three of the topics we discuss: Data, Methods, and Computed values. By the end of this section, you should be familiar with how to use these three features. I encourage you to fork the pen and start practicing/getting used to the features that Vue offers. When looking at this example, pay close attention to how the variables/functions on the HTML page interact with the values on the JS page.</p>

    <iframe height='265' scrolling='no' title='VueJS Basics' src='//codepen.io/eolculnamo2/embed/ZmJMPo/?height=265&theme-id=dark&default-tab=js,result' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: "100%;"}}>See the Pen <a href='https://codepen.io/eolculnamo2/pen/ZmJMPo/'>VueJS Basics</a> by Rob (<a href='https://codepen.io/eolculnamo2'>@eolculnamo2</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <p>
	    The Vue Instance is where VueJS starts on your application. Instantiating Vue is simple enough. The first step is connecting Vue to your HTML so that Vue knows where to target its DOM manipulations. In our case, we will target an empty div with an id called “app”. After this, all we need to do is to instantiate the Vue Instance and tell it we want to target the div with an id “app”. To do this, we use the key ‘el’ (as in element) and tell it we want to target “#app”.
    </p>

	<p>HTML page:</p>

    <span className="article-code-block">
	&lt;div id =”app”&gt;&lt;/div&gt;
    </span>

	<p>The Vue Instance on the JS page:</p>
    <div className="article-code-block">
	<div>{'new Vue({'}</div>
	    <div className="indent-1">el: “#app”</div>
    <div>});</div>
    </div>

    <p>
        Congratulations, you just instantiated Vue on your application. At this point Vue has no functionality. Next, I will show you how to do three important things in Vue with the instance. They are called data, methods, and computed. 
        First is data. In Vue, you have a reactive data object where we store our information. For now, just know that reactive means that when the data is updated, the user will see the updated data on the page. When we get to methods and computed, you will see this reactive data update your page. For now, you just need to know how to put the data on the page and Vue makes this very easy.
    </p>

    <em>Data</em>

    <p>
	    To add data, we first need to add the data object. To do this, we simply add data which takes an object as its value just like you see below.
    </p>
    <div className="article-code-block">
                <div>{'new Vue({'}</div>
                    <div className="indent-1">el: “#app”,</div>
                    <div className="indent-1">{'data: {'}</div>
                        <div className="indent-2">example: “I’m on the screen!”</div>
                <div className="indent-1">}</div>
            <div>});</div>
        </div>

    <p>
        To make our data show on the screen, we choose put the name of the data between {'{{ }}'} on the HTML page between the div with the ID that ‘el’ is targeting (which is #app in our case). So to make the page show the example data, we do this:
    </p>
    
    <div className="article-code-block">
    <div>&lt;div id=”app”&gt;</div>
		<div className="indent-1">{'{{ example }}'}</div>
    <div>&lt;/div&gt;</div>
    </div>

    <p>
        If everything went correctly, you should see “I’m on the screen!”. 
    </p>
    <p>
        We can also use simple operators between {'{{ }}.'} For example we could say: 
    </p>
    <div className="article-code-block">
	<div>&lt;div id=”app”&gt;</div>
        <br/>
		<div className="indent-1">{'{{ example + “ And I’m learning Vue!” }}'}</div>
        <div className="indent-1">// I’m on the screen! And I’m learning Vue!</div>
        <br/>
        <div className="indent-1">{'{{ 5 + 3 }}'}</div>
        <div className="indent-1">//8</div>
        <br/>
        <div className="indent-1">{'{{ example ? example : “No example” }}'}</div>
        <div className="indent-1">{'{{ example || “No example” }}'}</div>
        <div className="indent-1">//Check for undefined variables</div>
        <div>&lt;/div&gt;</div>
    </div>
    <br/>
    <br/>
    <em>Methods</em>
    <p>
        Next up are methods. Methods is where we keep functions in VueJS. For example, I can add to the Vue Instance we’ve already created and create a function to update the value of our data. 
    </p>

    <div className="article-code-block">
        <div>{'new Vue({'}</div>
            <div className="indent-1">el: “#app”,</div>
            <div className="indent-1">{'data: {'}</div>
                <div className="indent-2">example: “I’m on the screen!”</div>
            <div className="indent-1">},</div>
            <div className="indent-1">{'methods: {'}</div>
                <div className="indent-2">{'updateExample: function() {'}</div>
                <div className="indent-3">this.example = “I’ve updated my example!”</div>
            <div className="indent-2">}</div>
            <div className="indent-1">}</div>
        <div>});</div>
    </div>
    <p>
	    Above you’ll notice that we added a new key to our instance called ‘methods’. Within the methods object, I added a function called updateExample. To update the piece of our data called example, all you have to do is reference the data object with ‘this’ and then tell it which piece of data needs updated (which is example). So we would say this.example = “Whatever your update is”.
    </p>
    <p>
	    We’ve merely defined the function, but now we need to call the function. To do this, we’ll simple add a <a href="https://vuejs.org/v2/guide/events.html" target="_blank">Vue Click Event</a> to a button our HTML page. While the different events on page are not within the scope of this article, I encourage you to read more about them <a href="https://vuejs.org/v2/guide/events.html" target="_blank">here</a> when you have a chance. Below, we simply use v-on:click to tell Vue to call the updateExample() function when the user clicks the button. 
    </p>
<div className="article-code-block">
    <div>&lt;div id=”app”&gt;</div>
        <div className="indent-1">{'{{ example }}'}</div>
        <div className="indent-1">&lt;button v-on:click=”updateExample()”&gt;</div>
            <div className="indent-2">UPDATE</div>
        <div className="indent-1">&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
</div>
    <p>
	When you clicked the button, you should have noticed that the text above the button updated. If the text updated, congratulations, you are starting to be able to take advantage of Vue’s reactivity.
    </p>
    
    <p>    
	It is also important to understand that we can call functions within other functions inside of our methods object. Like with data, we have to reference ‘this’ and add .otherFunction() to it. Here is an example which adds to our existing code base.
    </p>
<div className="article-code-block">
    <div>{'new Vue({'}</div>
            <div className="indent-1">el: “#app”,</div>
            <div className="indent-1">{'data: {'}</div>
                <div className="indent-2">example: “I’m on the screen!”</div>
    <div className="indent-1">},</div>
    <div className="indent-1">{'methods: {'}</div>
        <div className="indent-2">{'updateExample: function() {'}</div>
        <div className="indent-3">this.example = “I’ve updated my example!”;</div>
        <div className="indent-3">//calling confirmUpdate using this keyword</div>
        <div className="indent-3">this.confirmUpdate();</div>
    <div className="indent-2">},</div>
    <div className="indent-2">{'confirmUpdate: function() {'}</div>
        <div className="indent-3">alert(“Example Updated!”!);</div>
    <div className="indent-2">}</div>
    <div className="indent-1">}</div>
    <div>});</div>
</div>

    <p>
        One other good trick to know about Vue methods is that we can return a value with them and they will appear in the dom. Consider the following example. I have one function which tells Vue whether or not to display a div. Within the div, I have a separate function which returns a message to display on the screen.  You will also notice something in the div called v-if. V-if  takes a boolean value and will display if it is passed true and will be removed if false. V-if is useful for dynamically displaying and hiding content from the page. 
    </p>

    <div className="article-code-block">
        <div>&lt;div id=”app”&gt;</div>
            <div className="indent-1">&lt;div v-if=shouldShowMessage()”&gt;</div>
            <div className="indent-2">{'{{ myMessage() }}'}</div>
            <div className="indent-1">&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>{'new Vue({'}</div>
                <div className="indent-1">el: “#app”,</div>
        <div className="indent-1">{'methods: {'}</div>
            <div className="indent-2">{'myMessage: function() {'}</div>
            <div className="indent-3">return "This is my message"</div>
        <div className="indent-2">},</div>
        <div className="indent-2">{'shouldShowMessage: function() {'}</div>
            <div className="indent-3">return true;</div>
        <div className="indent-2">}</div>
        <div className="indent-1">}</div>
        <div>});</div>
    </div>

    <p>
        As you can imagine, the ability to dynamically show or not show content with a function is very useful. By now, you should be able to see just how useful VueJS is for dynamic web applications that require DOM updates. Vue take this a step further with computed values.
    </p>
    <em>Computed Values</em>
    <p>
        Computed values can be thought of as dynamic variables. Suppose my application needs to be able to take any two numbers and sum them. Vue’s computed values makes this task extremely easy. In the example below, we will define two variables in our data object and then name a computed value to display on the screen. Notice that computed values are called just like data values. You simply call them by name to display them and do not need to add () to the end like a function.
    </p>

    <div className="article-code-block">
        <div>&lt;div id=”app”&gt;</div>
            <div className="indent-1">&lt;div v-if=shouldShowMessage()”&gt;</div>
            <div className="indent-2">{'{{ myMessage() }}'}</div>
            <div className="indent-1">&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>{'new Vue({'}</div>
                <div className="indent-1">el: “#app”,</div>
        <div className="indent-1">{'data: {'}</div>
            <div className="indent-2">n1: 3,</div>
            <div className="indent-2">n2: 5</div>
        <div className="indent-1">},</div>
        <div className="indent-1">{'computed {'}</div>
            <div className="indent-3">{'total: function(){'}</div>
            <div className="indent-4">return this.n1+this.n2;</div>
        <div className="indent-2">}</div>
        <div className="indent-1">}</div>
        <div>});</div>
    </div>

    <p>
        This computed value is reactive which means that if something updates one of the two numbers, the computed value ‘total’ will reflect this change. For example, suppose you make a button with a function (in your methods object) which adds one to either of the numbers. As soon as the number is updated, your computed value will also update and the total on the screen will change to its updated value.  
    </p>

    <h3>Vue Components</h3>
    
    <p>The Vue Instance is a great place to start learning VueJS. However, its use in most projects is to define 1) global variables and functions and 2) to facilitate the link between HTML and Vue Components. Before we go any further, it is important for you to know that moving from learning with the Vue Instance to working with Vue Components is not that hard. Vue components share many of the same options as the Vue Instance. For the sake of this section, we will again use data, methods, and computed values except in the Vue Component rather than the Vue Instance.  I’ve also broken down the process of using Vue Components into simple steps.</p>
    
    <p>Before we get started, go ahead and open this codesandbox project. It was created with the default Vue CLI project with small modifications to make it more relevant to this article. Most of the work in this is from the original CLI. Use this as a reference to make your learning easier. When you're ready, fork this project and start building your own Vue App with Vue Components. Go ahead and click the hamburger menu in the upper left hand corner of the iframe below to view the file system. The important files to us are index.html, main.js, and App.vue. Also pay attention to the HelloWorld component and how it is called/used in App.vue</p>
    <iframe src="https://codesandbox.io/embed/50njmzy69p" style={{width: '100%;'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

    <br/><br/><em>Step 1 Setting up the Vue Instance</em><br/>

    <p>Like before, we will start with an empty div and the Vue Instance. Vue Components cannot get to the DOM without the Vue Instance first. Notice in the example below that our instance now uses components and render. We will get to these soon, but for now just know that we will list the components we want to use in the components object and the render function will choose the component we want to render. Generally in the Vue Instance, there will be one component in components and it will be the component to be rendered in the render function. In this case, we will use the component App which we have not built yet.</p>

    <div className="article-code-block">
        <em>index.html</em><br/>
        <div>&lt;div id=”app”&gt;</div>
        <div>&lt;/div&gt;</div>
        <br/>
        <em>main.js -- The Vue Instance</em><br/>
        <div>Import Vue from ‘vue’;</div>
        <div>Import App from ‘./App.vue’;</div><br/>
        <div>//This registers the component globally.</div>
        <div>Vue.component("App",App);</div>
        <div>{'new Vue({'}</div>
                <div className="indent-1">el: “#app”,</div>
        <div className="indent-1">{'components: {'}</div>
            <div className="indent-2">App</div>
        <div className="indent-1">},</div>
        <div className="indent-1">render: h => h(App)</div>
        <div>});</div>
    </div>

    <br/><br/><em>Step 2 Building the App Component</em><br/>
    <p>Next we will construct the component in a .vue file. Vue files make front end development simple. They bring together HTML, JS, and CSS. For our App component, we will simply have template tags for our HTML, script tags for our JavaScript, and style tags for our CSS. A few important things to notice: 1) we have to include the name of the component in the script tags, 2) the data property returns an object whereas the instance does not (it won’t work without it in the component), and 3) we wrap the contents of template in div tags to prevent the component from breaking.</p>

    <div className="article-code-block">
        <em>App.vue</em><br/>
        <div>&lt;template&gt;</div>
        <div className="indent-1">&lt;div class="msg-wrap"&gt;</div>
            <div className="indent-2">{'{{ msg }}'}</div>
        <div className="indent-1">&lt;/div&gt;</div>
        <div>&lt;/template&gt;</div>
        <div>&lt;script&gt;</div>
        <div className="indent-1">//This is where you can import other components and dependencies. See App.vue in codesandbox for an example.</div>
        <div className="indent-1">{'export default {'}</div>
            <div className="indent-2">{'data: function() {'}</div>
                <div className="indent-3">{'return {'}</div>
                <div className="indent-4">msg: "Hello Vue"</div>
                <div className="indent-3">{'}'}</div>
            <div className="indent-2">{'},'}</div>
            <div className="indent-2">{'methods:{'}</div>
                <div className="indent-3">//This is where methods go just like on the Vue Instance</div>
            <div className="indent-2">{'},'}</div>
            <div className="indent-2">{'computed: {'}</div>
                <div className="indent-3">//This is where computed values go just like on the Vue Instance</div>
            <div className="indent-2">{'}'}</div>
        <div className="indent-1">{'}'}</div>
        <div>&lt;/script&gt;</div>
        <div>&lt;style&gt;</div>
        <div className="indent-1">{'.msg-wrap {'}</div>
            <div className="indent-2">color: red;</div>
        <div className="indent-1">{'}'}</div>
        <div>&lt;/style&gt;</div>
    </div>

    <br/><br/><em>Step 3 Referencing the component on the HTML page</em><br/>
    <p>If you’ve come this far, congratulations. The hardest parts are over. We can now test our changes by putting the component on our index.html to file to render. Your index.html file will look like this.</p>

    <div className="article-code-block">
        <em>index.html</em><br/>
        <div>&lt;div id=”app”&gt;</div>
            <div className="indent-1">&lt;App /&gt;</div>
        <div>&lt;/div&gt;</div>
    </div>

    <p>I highly recommend looking at the codesandbox example above to help get you started. Practice these basics and you’ll be much more comfortable with Vue in no time at all.</p>

    <h3>Closing</h3>
    <p>These are the basics for Vue. There are many other things to learn. Go build a simple app like a to do list. You now have the tools to do it! Once you are comfortable with these basics, you should go and research such items as:</p>
    
    <ul>
        <li><a href="https://vuejs.org/v2/guide/list.html" target="_blank">Iteration with v-for</a></li>
        <li><a href="https://vuejs.org/v2/guide/components.html" target="_blank">Nesting Components</a></li>
        <li><a href="https://medium.com/@sky790312/about-vue-2-parent-to-child-props-af3b5bb59829" target="_blank">Emitting and Props</a></li>
        <li><a href="https://vuejs.org/v2/guide/events.html" target="_blank">Vue inline events</a></li>
        <li><a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">Conditional Classes and Styling</a></li>
    </ul>

    <p>
        Overall, take it slow. It is important to understand enough at first to get something working rather than trying to learn too much at once. Good luck with Vue!
    </p>
</div>
    )

}

export default VueBasics;
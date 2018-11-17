import React from 'react';
import '../../articles.scss';

const VueBasics = () => {
    return (
<div>
    <div className="article-title-wrap">
        <h1>VueJS Basics: The Vue Instance and The Basics of Components</h1>
        <h4>Rob Bertram</h4>
    </div>
    <p>
        The goal of this article is to give a brief introduction to the key features of VueJS. I do not cover set up with Vue. For this, I recommend using the [LINK] Vue CDN or [LINK] Vue CLI to get started.
    </p>
    <p>    
        This article will first cover the Vue Instance and then how to extend much of its functionality into manageable components. 
    </p>

    <img className="article-vue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png" />
    
    <h3>The Vue Instance</h3>
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
        First is data. In Vue, you have a reactive data object that where we store our information. For now, just know that reactive means that when the data is updated, the user will see the updated data on the page. When we get to methods and computed, you will see this reactive data update your page. For now, you just need to know how to put the data on the page and Vue makes this very easy.
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
	    We’ve merely defined the function, but now we need to call the function. To do this, we’ll simple add a [LINK] Vue Click Event to a button our HTML page. While the different events on page are not within the scope of this article, I encourage you to read more about them [LINK] here when you have a chance. Below, we simply use v-on:click to tell Vue to call the updateExample() function when the user clicks the button. 
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
            <div className="indent-2">n1: 3</div>
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
</div>
    )

}

export default VueBasics;
import React from 'react';
import logo from '../../Assets/FamilyPhoto.jpeg';

// TODO: Add a comment explaining what a react component is
// A react component is a function that returns JSX
// JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.
function Home() {
  

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.
  // Curly braces are used to embed a JavaScript expression in JSX
  // in this case it will import the text variable from above on line 7
  return (
    <div className = "App-home">
        <img src={logo} className="Photo" alt="logo" />
    
<h1>Philip Dangerfield</h1>
<p>Full Stack Developer ready to help you with your next important project. With my knowledge of JavaScript and React we can do something really special. </p>
</div>
  ) ;
}

export default Home;
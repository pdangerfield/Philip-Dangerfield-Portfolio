// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// TODO: Add a comment giving a brief description of what React is
// React is a JavaScript library for building user interfaces
// It is usefull for building large applications with data that changes over time
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// React is the core library
// ReactDOM is the glue between React and the DOM
// ReactDOM is the name of the package that contains the DOM-specific methods
// ReactDOM.render() is the most common way to render JSX
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// ReactDOM.render() is the most common way to render JSX
// ReactDOM.render() controls the contents of the container node you pass in
// Any existing DOM elements inside are replaced when first called
ReactDOM.render(<App />, document.getElementById('root'));
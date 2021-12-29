import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import "../src/index.css";

function Main(){
    return (
      <App />
    );
  }

ReactDOM.render(<Main />, document.getElementById('root'));
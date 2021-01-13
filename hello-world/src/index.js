import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import reportWebVitals from './reportWebVitals';

const person = {
  personName: "Camille",
  personAge: 26,
  favorites: [
    "giraffes",
    "jaguars",
    "elephants",
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <Hello 
      name={person.personName} 
      age={person.personAge} 
      animals={person.favorites}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

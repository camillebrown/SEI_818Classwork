import React from 'react'
import './App.css';

//import components
import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import {
  Route,
  Link,
} from 'react-router-dom'

//LINK takes a to component with the url
//similar to an anchor tag but prevents page redirects

//this creates a SPA - single page application that is simply re-rendering the routes that are passed

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/procedures'>Procedures</Link>{' '}
        <Link to='/contact'>Contact</Link> {' '}
      </nav>  
      <Route exact path="/" component={Home} />
      <Route exact path="/procedures" component={Procedures} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Class1 from './components/Class1';
import Class2 from './components/Class2';

function App() {
  return (
    <Router>
      <div className="App">
        
        
        <Link to="/">class1</Link>
        <Link to="/class2">class2</Link>
        <Route path="/" component={Class1}/>
        <Route path="/class2" component={Class2}/>
      </div>
    </Router>
  );
}

export default App;

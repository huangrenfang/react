import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import Index from './components/Inedx'
import About from './components/About'
import Course from './components/Course'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Link to="/" >首页</Link>
      <Link to="/course">课程</Link>
      <Link to="/about">关于我们</Link>
      <Route path="/" exact component={Index}/>
      <Route path="/course" component={Course}/>
      <Route path="/course/:id" component={Details}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;

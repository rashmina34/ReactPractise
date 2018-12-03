import React, { Component } from 'react';
import './App.css';
import Menu from './Component/Menu';
import Blog from './Component/Container';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
  const HOME = () => (
    <div>
      <Menu/>
    </div>
  )
  const BLOG = () => (
    <div>
      <Blog/>
    </div>
  )
    return (
    <div className="App">
    <Router>  
      <div>
          <Link to = "/">HOME</Link>
            <Link to = "/blog" >BLOG</Link>
            <hr/>
           <Route exact path="/" component = {Menu} />
           <Route path="/blog" component = {Blog} />
      </div>

      </Router>
      </div>
    );
  }
}

export default App;

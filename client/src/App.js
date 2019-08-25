import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/ContactUs'
import Detail from './pages/Details'
import News from './pages/News'


function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/news" component={ News }/>
        <Route path="/contacts" component={ Contact }/>
        <Route path="/details" component={ Detail }/>
        <Route component={ NotFound }/>
      </Switch>
      <br></br>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

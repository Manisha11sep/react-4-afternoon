import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';
// import History from './components/History/History';
// import Contact from './components/Contact/Contact';
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={ClassList} exact path="/classlist/:class" />
    <Route component={Student}  path ="/student/:id"/>
    <Route component={Student}  path ="/student/:id"/>
    <Route component={Student}  path ="/student/:id"/>
    {/* <Route path='/about/history' component={ History }/>
    <Route path='/about/contact' component={ Contact }/> */}
  </Switch>
)

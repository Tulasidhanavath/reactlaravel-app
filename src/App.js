import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import BasicDetails from './pages/BasicDetails';

function App() {
  return (
    <Router>
        <Route exact path ="/" component={BasicDetails}></Route>
        <Route path ="/add details" component="AddStudent"></Route>
    </Router>
  );
}

export default App;

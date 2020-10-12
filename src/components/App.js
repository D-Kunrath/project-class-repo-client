import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css" ;





import Home from "../routeComponents/Home"
import About from "../routeComponents/About"
import Contact from "../routeComponents/Contact"
import Signup from "../routeComponents/Signup"
import Login from "../routeComponents/Login"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />

      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

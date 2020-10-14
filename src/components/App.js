import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

// import public components
import SideBarPublic from "./SideBarPublic"
import Home from "../routeComponents/Home";
import About from "../routeComponents/About";
import Contact from "../routeComponents/Contact";
import Signup from "../routeComponents/Signup";
import Login from "../routeComponents/Login";

// import private components
import PrivateRoute from '../routeComponents/private/PrivateRoute';
import SideBarPrivete from "./SideBarPrivate"
import Profile from '../routeComponents/private/Profile'
import Logout from "../routeComponents/private/Logout"

function App() {
  const [ state, setState ] = useState ({
    user: {},
    token: '',
  })

  const [ loading, setLoading ] = useState (false);

  useEffect(() => {
    (async () => {
      const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || '""')
      await setState(prevState => {
        return ({ ...prevState, ...storedUser })
      })
    })()
  }, [])

  useEffect(() => {
    console.log(state);
  } , [state]);



  return (
    <div className="App">
      <BrowserRouter>
        {state.user._id ? (
          
          <div className="wrapper">
            <SideBarPrivete />
            <Switch>

            <PrivateRoute exact path="/logout" user={state} component={Logout} setUserState={setState} />

            <PrivateRoute exact path='/profile' user={state} component={Profile} />
            <Route>
              <Redirect to='/profile' />
            </Route>
            
          </Switch>
          </div>
        ) : (
          <div className="wrapper">
          <SideBarPublic />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={() => {
              return <Login setUserState={setState} />} 
            }/>
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

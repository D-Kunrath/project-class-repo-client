import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

// import public components
import Home from "../routeComponents/Home";
import About from "../routeComponents/About";
import Contact from "../routeComponents/Contact";
import Signup from "../routeComponents/Signup";
import Login from "../routeComponents/Login";

// import private components
import PrivateRoute from '../routeComponents/private/PrivateRoute';
import Profile from '../routeComponents/private/Profile'

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

  // const handleLogout = () => {
  //   setState({user: {}, token: ''});
  // }

  return (
    <div className="App">
      <BrowserRouter>
        {state.user._id ? (
          <Switch>
          {console.log('switchhhhhhhh')}
            <PrivateRoute exact path='/profile' user={state} component={Profile} />
            <Route>
              <Redirect to='/profile' />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={() => {
              return <Login setUserState={setState} />} 
            }/>
            {/* <Route path='/profile' component={Profile} /> */}
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
      APP!
    </div>
  );
}

export default App;

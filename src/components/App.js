import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from "../route-components/Home"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route to='/' component={Home} />
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route to='/' component='' />
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

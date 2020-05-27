import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Page1 from './view/Page1';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/page1" exact component={Page1} />
          <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

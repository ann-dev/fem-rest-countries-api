import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/shared/Header';
import Home from 'pages/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;

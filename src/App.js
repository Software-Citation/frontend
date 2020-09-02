import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);

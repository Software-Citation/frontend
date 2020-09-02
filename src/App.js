import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/faq" exact component={FAQ} />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);

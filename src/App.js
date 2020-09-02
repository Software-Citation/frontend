import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import CffInit from './components/CffInit/CffInit';
import Wizard from './components/Wizard/Wizard';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/cff-init" exact component={CffInit} />
        <Route path="/wizard" exact component={Wizard} />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);

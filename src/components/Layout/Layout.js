import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Layout.module.scss';
import NavBar from '../NavBar/NavBar';

function Layout(props) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className="container d-flex flex-column align-items-center">
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(Layout);

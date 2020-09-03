import React from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap';

import CffForm from './CffForm/CffForm';
import CompiledCff from './CompliedCff/CompiledCff';

import styles from './CffInit.module.scss';

class CffInit extends React.PureComponent {
  render() {
    return (
      <Container className={styles.container}>
        <Row className={styles.cffContainer}>
          <Col className={styles.cffFormContainer}>
            <CffForm />
          </Col>
          <Col className={styles.compiledCffContainer}>
            <CompiledCff />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Button variant="primary">Download CFF</Button>
        </Row>
      </Container>
    );
  }
}

export default CffInit;

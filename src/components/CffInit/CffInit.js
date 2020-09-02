import React from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap';

import CffForm from './CffForm/CffForm';
import CompiledCff from './CompliedCff/CompiledCff';

class CffInit extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CffForm />
          </Col>
          <Col>
            <CompiledCff />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Button variant="primary">Generate CFF</Button>
        </Row>
      </Container>
    );
  }
}

export default CffInit;

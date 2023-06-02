import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment } from 'react';
import { Formulario } from './components/Formulario';
function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Usuarios de la veterinaria</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <Formulario />{' '}
          </Col>
          <Col>Listado de usuarios</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

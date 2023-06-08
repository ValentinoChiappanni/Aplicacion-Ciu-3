import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Cliente } from './components/Cliente';

function App() {
  const [clientes, editarClientes] = useState([]);

  const agregarCliente = (socio) => {
    editarClientes([...clientes, socio]);
  };

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
            <Formulario agregarCliente={agregarCliente} />
          </Col>
          <Col>
            <h4>Listado de usuarios</h4>
            <Cliente />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

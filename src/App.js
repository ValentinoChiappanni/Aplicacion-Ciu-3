import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useState } from 'react';
import { Formulario } from './components/Formulario';

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
            <h2>Listado de usuarios</h2>
            {clientes.map((cliente, index) => (
              <p key={index}>{cliente.nombre}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

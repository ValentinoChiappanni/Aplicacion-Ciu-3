import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useState } from 'react';
import { Formulario } from './components/Formulario';
function App() {
  // Genero un hook de estado vacio con clientes
  const [clientes, editarClientes] = useState([]);

  // Funcion que toma el socio nuevo y lo mete en el array de clientes.
  const agregarCliente = (socio) => {
    editarClientes({
      ...clientes,
      socio,
    });
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
          <Col>Listado de usuarios</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

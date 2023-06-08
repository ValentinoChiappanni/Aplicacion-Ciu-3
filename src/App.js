import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Cliente } from './components/Cliente';

function App() {
  const [clientes, editarClientes] = useState([]);

  const agregarCliente = (socio) => {
    editarClientes([...clientes, socio]);
  };

  // Borrar cliente
  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter((cliente) => cliente.id !== id);
    editarClientes(nuevosClientes);
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
            {clientes.length > 0 ? (
              <h4>Listado de clientes</h4>
            ) : (
              <h4>No hay clientes</h4>
            )}
            {clientes.map((cliente) => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
                borrarCliente={borrarCliente}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

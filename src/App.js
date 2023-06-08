import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Cliente } from './components/Cliente';

function App() {
  // Iniciamos local storage
  let clientesGuardados = JSON.parse(localStorage.getItem('clientes'));
  if (!clientesGuardados) {
    clientesGuardados = [];
  }

  const [clientes, editarClientes] = useState(clientesGuardados);

  // Hook useEffect sirve para realizar algun cambio en alguna variable/hook/situcacion.
  useEffect(() => {
    // Algo cambio
    clientesGuardados
      ? localStorage.setItem('clientes', JSON.stringify(clientes))
      : localStorage.setItem('clientes', JSON.stringify([]));
  }, [clientesGuardados]);

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

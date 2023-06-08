import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';

export function Cliente({ cliente, borrarCliente }) {
  return (
    <Fragment>
      <Badge variant="secondary">
        <p>Nombre: {cliente.nombre}</p>
        <p>DNI: {cliente.dni}</p>
        <Button variant="light" onClick={() => borrarCliente(cliente.id)}>
          Borrar
        </Button>
      </Badge>
    </Fragment>
  );
}

import React, { Fragment, useState, } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { v4 as uuid } from 'uuid'

export function Formulario({ agregarCliente }) {
  // Creo un socio vacio y lo inicializo con un hook de estado
  const [socio, editarSocio] = useState({
    nombre: "",
    dni: ""
  })

  // Estraer los valores
  const { nombre, dni } = socio

  // Creo otro hook de estado para manerar el error
  const [error, setError] = useState(false)

  // Recogemos lo que el usuario escribe en el formulario
  const handleChange = (e) => {
    editarSocio({
      ...socio,
      [e.target.name]: e.target.value
    })
    console.log("Tomo los datos...")
  }

  // 
  const submitForm = (e) => {
    e.preventDefault()

    if (nombre.trim() === '' || dni.trim() === '') {
      setError(true)
      return 1;
    }

    setError(false)

    socio.id = uuid()
    console.log(socio)

    agregarCliente(socio)


    editarSocio({
      nombre: '',
      dni: ''
    })

  }

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre completo"
            name="nombre"
            onChange={handleChange}
            value={nombre} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sin puntos ni espacios"
            name="dni"
            onChange={handleChange}
            value={dni} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar socio
        </Button>

      </Form>

      {
        error ? <h4>Completa todos los campos</h4> : null
      }
    </Fragment>
  )
}
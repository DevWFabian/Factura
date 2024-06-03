import {React, useState} from 'react';
import {Button,Form,Row} from 'react-bootstrap';
import InputInvoice from './input'; 
import validateHandler from "../services/validateFields"
import {GetDataObject} from '../services/getData';

/**
 * FormExample Component
 *
 * Este componente muestra un formulario para ingresar datos de un producto.
 * 
 * Props:
 * - object: Un objeto que contiene la información del producto.
 * - returnData: Una función que se llama para devolver los datos del formulario al componente padre.
 * 
 * @author: Wilson Fabian Cruz Andrade
 */

function FormExample({object,returnData}) {
  const [validated, setValidated] = useState(false);// Estado  que controla el estilo de boostrap para validar  los campos
  const [dataInput, setDataInput] = useState({})// Estado  para almacenar los campos que llegan de los inputs

  // función  que  se ejecuta cuando se realiza submit  el cual  valida  los campos  y  devuelve los datos del formulario a el componente padre
  const handleSubmit = (event) => {
    const isValid = validateHandler(event);
    returnData(dataInput)
    setValidated(isValid);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <InputInvoice object={object} onChange={GetDataObject(dataInput,setDataInput)}></InputInvoice>
      <Row lg="1" className='justify-content-md-center'>
        <Row>
          <Button type="submit" className="mb-3" variant="success">Agregar Producto</Button>
        </Row>
      </Row>
    </Form>
  );
}

export default FormExample;
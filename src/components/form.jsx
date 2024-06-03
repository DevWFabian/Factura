import {React, useState,useEffect} from 'react';
import {Button,Form,Row} from 'react-bootstrap';
import InputInvoice from './input'; 
import validateHandler from "../services/validateFields"
import {GetDataObject} from '../services/getData';


function FormExample({object,returnData}) {
  const [validated, setValidated] = useState(false);
  const [dataInput, setDataInput] = useState({})
  const [count, setCount] = useState(2)

  const handleSubmit = (event) => {
    const isValid = validateHandler(event);
    setDataInput({...dataInput, ["Subtotal"]:parseFloat( dataInput.Cantidad *  dataInput["Valor Unitario"]).toFixed(2)});
    returnData(dataInput)
    setCount(count + 1)
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
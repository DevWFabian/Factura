import React from "react";
import {Col,Form,Row} from 'react-bootstrap';

/**
 * InputInvoice Component
 *
 * Este componente genera inputs basado en el objeto que recibe como prop.
 * Divide los campos del formulario en filas de 2 columnas si es posible.
 * 
 * Props:
 * - object: Un objeto que contiene los detalles de los campos del formulario.
 * - onChange: Una función que se llama cuando cambia el valor de un campo del formulario.
 * 
 * Ejemplo de uso:
 * <InputInvoice object={formObject} onChange={handleInputChange} />
 */

const InputInvoice =({object,onChange})=>{
  object=Object.values(object);
  const row = object.reduce((result, _, index) => {
    if (index % 2 === 0) {
      result.push(object.slice(index, index + 2));
    }
    return result;
  }, []);
  
  return row.map((row,rowIndex)=>(
    <Row  lg={row.length % 2 === 0 ?2:1} sm={1} key={rowIndex}>
      {
        row.map((field)=>(
          <Form.Group as={Col} className="mb-3" controlId={field.input.placeholder} key={field.input.id}>
            {field.label?(<Form.Label className='fw-bold'>{field.label.text}</Form.Label>):""}
            <Form.Control
            required
            type={field.input.type}
            placeholder={field.input.placeholder}
            onChange={ typeof onChange === 'function' ? (e) => onChange(`${e.target.id}`, e.target.value) : undefined}/>
          </Form.Group>
        ))
      }
    </Row>
  ))
}
export default InputInvoice;
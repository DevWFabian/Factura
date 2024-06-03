import './App.css';
import {React, useState} from 'react';
import {CreateCard,FormExample,InputInvoice,TableProducts} from "./components/index.js"
import {Row,Container,Col} from 'react-bootstrap';
//son los json que contienen la data para crear los inputs de los form y tambien  esta la data que inicia con dos productos para la tabla
import { dataCustomer,dataProduct,dataTableProduct } from './data/index.js';
import {getDataArray,deleteDataArray} from "./services/getData.jsx"
 
/**
 * App Component
 *
 * Este componente es el componente principal de la aplicación.
 * Renderiza una interfaz para generar una factura, mostrando un formulario de entrada,
 * una lista de productos, y el subtotal, el IVA y el total de la factura.
 */
function App() {
  // Estado para almacenar los datos del formulario de productos de la factura
  const [formData, setFormData] = useState(dataTableProduct.invoice_products);
  const subtotal = formData.reduce((total,product)=>total += product["Valor Unitario"] * product.Cantidad,0)
  const iva = subtotal * 0.16
  const total = subtotal + iva
  return (
    <div className="App"> 
      <Container className='p-5'>
        <Row className='mx-5 p-5'>
          <CreateCard title="Factura">
            <InputInvoice object={dataCustomer}></InputInvoice>
            <FormExample object={dataProduct} returnData={getDataArray(formData,setFormData)}></FormExample>
            <TableProducts object ={formData} returnData={deleteDataArray(formData,setFormData)}></TableProducts>
            <Row lg={1} className='text-end border'>
              <Col>
                <span>Subtotal: ${subtotal.toFixed(2)}</span>  
              </Col>
              <Col>
                <span>{`IVA(16%): $${iva.toFixed(2)}`}</span>
              </Col>
              <Col>
                <span>Total: ${total.toFixed(2)}</span>
             </Col>
            </Row>
          </CreateCard>
        </Row>
      </Container>
    </div>
  );
}

export default App;

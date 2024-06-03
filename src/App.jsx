import './App.css';
import {React, useState} from 'react';
import {CreateCard,FormExample,InputInvoice,TableProducts} from "./components/index.js"
import {Row,Container} from 'react-bootstrap';
import { dataCustomer,dataProduct,dataTableProduct } from './data/index.js';
import {GetDataObject,getDataArray,deleteDataArray} from "./services/getData.jsx"
 

function App() {
  const [formData, setFormData] = useState(dataTableProduct.invoice_products);
  return (
    <div className="App"> 
      <Container className='p-5'>
        <Row className='mx-5 p-5'>
          <CreateCard title="Factura">
            <InputInvoice object={dataCustomer}></InputInvoice>
            <FormExample object={dataProduct} returnData={getDataArray(formData,setFormData)}></FormExample>
            <TableProducts object ={formData} returnData={deleteDataArray(formData,setFormData)}></TableProducts>
          </CreateCard>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import {React,useState,useEffect} from "react";
import {Table,Button} from 'react-bootstrap';
import { dataTableProduct } from "../data";
const TableProducts=({object,returnData})=>{
  
  const [data , setData] = useState(object)
  useEffect(() => {
    setData(object);
  }, [object]);
  const handleDelete = (index) => {
    returnData(index)
  };
  return(
    <Table bordered responsive>
      <thead className="table-header">
        <tr>
          <th>ID Producto</th>
          <th>Descripción</th>
          <th>Valor Unitario</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item["ID Producto"]}</td>
            <td>{item["Descripción"]  }</td>
            <td>{parseFloat(item["Valor Unitario"]).toFixed(2) }</td>
            <td>{item["Cantidad"]}</td>
            <td>{parseFloat(item["Valor Unitario"]*item["Cantidad"]).toFixed(2)}</td>
            <td><Button variant="danger" type="button" onClick={() => handleDelete(index)}>Eliminar</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default TableProducts;

// function BasicExample() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>I</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default BasicExample;
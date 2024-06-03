import {React,useState,useEffect} from "react";
import {Table,Button} from 'react-bootstrap';

/**
 * TableProducts Component
 *
 * Este componente muestra una tabla de productos con la información proporcionada en el objeto.
 * Proporciona la capacidad de eliminar un producto y devuelve el índice del producto eliminado.
 * 
 * Props:
 * - object: Un array de objetos que representa los productos a mostrar en la tabla.
 * - returnData: Una función que se llama cuando se elimina un producto de la tabla.
 * 
 * Ejemplo de uso:
 * <TableProducts object={productos} returnData={handleDelete} />
 */
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


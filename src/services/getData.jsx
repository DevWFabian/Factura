import React from "react";

/**
 * GetDataObject Function
 *
 * Esta función devuelve una función que actualiza los datos de un objeto dado un id y un valor.
 * 
 * @param {Object} preData - El objeto de datos original.
 * @param {function} setData - La función para actualizar el objeto de datos.
 * @returns {function} - Una función que toma un id y un valor y actualiza el objeto de datos.
 * 
 * Ejemplo de uso:
 * const handleDataUpdate = GetDataObject(data, setData);
 * handleDataUpdate('idCampo', 'nuevoValor');
 */

/**
 * getDataArray Function
 *
 * Esta función devuelve una función que agrega un nuevo valor a un array de datos.
 * 
 * @param {Array} preData - El array de datos original.
 * @param {function} setData - La función para actualizar el array de datos.
 * @returns {function} - Una función que toma un valor y agrega el valor al array de datos.
 * 
 * Ejemplo de uso:
 * const handleDataAddition = getDataArray(data, setData);
 * handleDataAddition(nuevoValor);
 */

/**
 * deleteDataArray Function
 *
 * Esta función devuelve una función que elimina un valor de un array de datos dado un índice.
 * 
 * @param {Array} preData - El array de datos original.
 * @param {function} setData - La función para actualizar el array de datos.
 * @returns {function} - Una función que toma un índice y elimina el valor del array de datos.
 * 
 * Ejemplo de uso:
 * const handleDataDeletion = deleteDataArray(data, setData);
 * handleDataDeletion(indice);
 */
export const GetDataObject = (preData,setData)=>(id, value) => {
  setData({ ...preData, [id]: value });
};
export const getDataArray =(preData,setData)=>( value) => {
  setData([ ...preData,  value ]);
};
export const deleteDataArray =(preData,setData)=>( index) => {
  const newArray = [...preData.slice(0, index), ...preData.slice(index + 1)];
  setData(newArray);
};


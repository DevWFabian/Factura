import React from "react";

/**
 * validateHandler Function
 *
 * Esta función de boostrap maneja la validación de un formulario.
 * 
 * @param {Event} event - El evento del formulario que se va a validar.
 * @returns {boolean} - Devuelve true si el formulario es válido, de lo contrario, devuelve false.
 * 
 * Ejemplo de uso:
 * const handleSubmit = (event) => {
 *   if (validateHandler(event)) {
 *     // Realizar acción si el formulario es válido
 *   } else {
 *     // Realizar acción si el formulario no es válido
 *   }
 * };
 */
const validateHandler=(event)=>{
  event.preventDefault()
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    console.log("paso")
    event.stopPropagation();
  }
  return true
}
export default validateHandler;
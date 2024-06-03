import React from "react";


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
import React from 'react';
import Card from 'react-bootstrap/Card';

/**
 * CreateCard Component
 *
 * Este componente muestra una tarjeta con un título centrado y contenido.
 * 
 * Props:
 * - children: El contenido que se mostrara en el body dentro de la tarjeta.
 * - title: El título que aparece en la parte superior de la tarjeta.
 * 
 * @author: Wilson Fabian Cruz Andrade
 */

const CreateCard=({children,title})=>{
  return(
    <Card>
      <Card.Body>
        <Card.Title className='text-center' as="h3">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  )
}
export default CreateCard;
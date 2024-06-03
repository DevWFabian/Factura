import React from 'react';
import Card from 'react-bootstrap/Card';

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
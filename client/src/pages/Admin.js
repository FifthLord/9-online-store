import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
   return (
      <Container className='d-flex flex-column'>
         <Button>Додати тип</Button>
         <Button>Додати бренд</Button>
         <Button>Додати пристрій</Button>
      </Container>
   );
};

export default Admin;
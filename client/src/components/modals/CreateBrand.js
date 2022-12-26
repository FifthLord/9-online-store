import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI.js'

const CreateBrand = ({ show, onHide }) => {
   const [value, setValue] = useState('')
   const addBrand = () => {
      createBrand({ name: value }).then(data => {
         setValue('')
         onHide()
      })
   }
   return (
      <Modal
         show={show}
         onHide={onHide}
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Додати новий бренд
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={"Введіть назву бренду"}
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
            <Button variant="outline-success" onClick={addBrand}>Додати бренд</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CreateBrand;
import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
   const device = { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' }

   return (
      <Container className='mt-3'>
         <Row>
            <Col md={4}>
               <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
               <Row className='d-flex flex-column align-items-center'>
                  <h2>{device.name}</h2>
                  <div
                     className='d-flex justify-content-center align-items-center'
                     style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                  >
                     {device.rating}
                  </div>
               </Row>
            </Col>
            <Col md={4}>

            </Col>
         </Row>
      </Container>
   );
};

export default DevicePage;
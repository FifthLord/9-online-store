import React from 'react';
import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
   const device = { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' }
   const description = [
      { id: 1, title: "Оперативна пам'ять", description: "5Gb" },
      { id: 2, title: "Камера", description: "12Мп" },
      { id: 3, title: "Процесор", description: "Intel" },
      { id: 4, title: "Ядер", description: "4" },
      { id: 4, title: "Акумулятор", description: "4000мАг" },
   ]
   return (
      <Container className='mt-3'>
         <Row>
            <Col md={4}>
               <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
               <Row className='d-flex flex-column align-items-center'>
                  <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
                  <div
                     className='d-flex align-items-center justify-content-center'
                     style={{
                        background: `url(${bigStar}) no-repeat center center`,
                        width: 240, height: 240,
                        backgroundSize: 'cover', fontSize: 64
                     }}
                  >
                     {device.rating}
                  </div>
               </Row>
            </Col>
            <Col md={4}>
               <Card
                  className='d-flex flex-column align-items-center justify-content-around'
                  style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}
               >
                  <h3>Від: {device.price} грн.</h3>
                  <Button variant={'outline-dark'}>Додати в корзину</Button>
               </Card>
            </Col>
         </Row>
         <Row className='d-flex flex-column m-3'>
            <h1>Xарактеристики</h1>
            {description.map((info, index) =>
               <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                  {info.title}: {info.description}
               </Row>
            )}
         </Row>
      </Container>
   );
};

export default DevicePage;
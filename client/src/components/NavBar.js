import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
   const { user } = useContext(Context)
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href={SHOP_ROUTE}>КупиСлона</Navbar.Brand>
            {/* <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиСлона</NavLink> */}
            {user.isAuth ?
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button variant={"outline-light"}>Адмін панель</Button>
                  <Button variant={"outline-light"} className="ml-2">Увійти</Button>
               </Nav>
               :
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизація</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   );
});

export default NavBar;
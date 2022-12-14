import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
   const { user } = useContext(Context)
   const navigate = useNavigate()

   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            {/* <Navbar.Brand href={SHOP_ROUTE}>КупиСлона</Navbar.Brand> */}
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиСлона</NavLink>
            {user.isAuth ?
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button
                     variant={"outline-light"}
                     onClick={() => navigate(ADMIN_ROUTE)}
                     className="m-1"
                  >Адмін панель</Button>
                  <Button
                     className="m-1"
                     variant={"outline-light"}
                     onClick={() => logOut()}
                  >Вийти</Button>
               </Nav>
               :
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   );
});

export default NavBar;
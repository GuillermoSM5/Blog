import React from 'react';
import {NavLink} from 'react-router-dom';
import Style from 'styled-components';
const Header = () => {
    return ( 
         <ContenedorHeader>
          <Titulo>Mi blog personal </Titulo>
          <Menu>
             <NavLink to='/' exact >Inicio</NavLink>
             <NavLink to='/blog'>Blog</NavLink>
             <NavLink to='/acerca-de'>Acerca de Mi</NavLink>          
           </Menu> 
          </ContenedorHeader>
        
    )}

 const ContenedorHeader=Style.header`
     text-align: center;
     margin-bottom: 40px
 `;   

 const Titulo=Style.h1`
     margin-bottom: 10px;
     font-size: 30px;
 `; 

 const Menu = Style.nav`
    a{
      text-decoration: none;
      color: #165168;
      margin: 0 10px;
    }

    a:hover{
      color: #191668;
    }

    a.active{
      border-bottom: 2px solid #165168;
      padding-bottom: 3px;
    }
 `;
 
export default Header;
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Style from 'styled-components';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Blog from './components/blog/Blog';
import Acercademi from './components/Acercademi/Acercademi';
import Articulo from './components/Articulo/Articulo';
import Error404 from './components/Error404/Error404';

const App = () => {
  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main>
          <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact  path='/blog' component={Blog}/>
            <Route path='/pokemon/:name' component={Articulo}/>
            <Route path='/acerca-de'component={Acercademi}/>   
            <Route component={Error404}/>
          </Switch>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
   );
}

const ContenedorPrincipal = Style.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
` ;

const Main = Style.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129,129,129,0.1)
`;
 
export default App;
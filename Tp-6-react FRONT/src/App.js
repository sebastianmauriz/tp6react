import React, {Component} from 'react';
import Productos from './components/Productos';
import { Switch, Route } from 'react-router-dom';
import DondeEstamos from './components/DondeEstamos';
import DetalleInstrumento from './components/DetalleInstrumento';
import Home from './components/Home';
import FormularioUpdate from './components/FormularioUpdate';
import FormularioCrear from './components/FormularioCrear';

class App extends Component{
    
  
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/dondeEstamos" component={DondeEstamos} ></Route>
        <Route path="/productos" component={Productos} ></Route>
        <Route path="/detalleInstrumento/:id" component={DetalleInstrumento} ></Route>
        <Route path="/crear" component={FormularioCrear} ></Route>
        <Route path="/actualizar/:id" component={FormularioUpdate} ></Route>
      </Switch>
    ) 
  }
}

export default App;
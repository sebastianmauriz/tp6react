import React, {Component} from 'react';
import Navigation from './Navigation';
import {instrumentos} from '../datos/instrumentos.json';
import Fila from './Fila';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Productos extends Component{
    
  _isMounted = false;

  constructor(){
    super();
    this.state = ({
      db:[],
    });
    
  }

  //LEER Teoria https://es.reactjs.org/docs/react-component.html#overview
  //Este método se invoca inmediatamente después de que un componente se monte 
  //este es un buen lugar para instanciar la solicitud de red.
  componentDidMount(){
    this._isMounted = true;
    this.getInstrumentosServer();
  }

  //Este método es llamado cuando un componente se elimina del DOM
  componentWillUnmount(){
    this._isMounted = false;
  }

  getInstrumentosServer(){
    fetch('http://localhost:8080/api/instrumento/')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({db: responseJson});
    });
    
  }

  render(){
    const instrumentos = this.state.db.map((instrumento, i)=>{return (
      <Fila key={instrumento.id} id={instrumento.id} nombre={instrumento.instrument} precio={instrumento.precio} marca={instrumento.marca} modelo={instrumento.modelo} envio={instrumento.costoEnvio} vendidos={instrumento.cantidadVendida} foto={instrumento.foto}></Fila>
    )
  })
    return (
      
      <React.Fragment>
          <Navigation></Navigation>
          <div>
          <Button href="/crear" style={{ height: '50px', width: '150px',fontSize: 19 }}>Crear</Button>
          
          </div>
          <Container fluid="md">
              <Row>
              {instrumentos}
              </Row>
          </Container>
      </React.Fragment>
      );

  }
}

export default Productos;
import React, {Component} from 'react';
import {instrumentos} from '../datos/instrumentos.json';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class DetalleInstrumento extends Component{
    
    constructor(){
        super();
        this.state = {
          instrumentos
        }
    }
    

      envio(envio) {
        
        if (envio == 'G') {
            
            
            return true;
        }else{
            return false;
        }
      }
      componentDidMount(){
        this._isMounted = true;
        this.getPlatoXIdServer();
        }
    
        componentWillUnmount(){
        this._isMounted = false;
        }
    
        getPlatoXIdServer(){
            const parametroId = this.props.match.params.id;
            fetch('http://localhost:8080/api/instrumento/'+parametroId)
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({instrumentos: responseJson});
            })  
        
        }
        //this.state.instrumentos
        deleteInstrumento(instrumentoDel){
            const fetch = require('node-fetch');
        
            const body = instrumentoDel;
        
            const response =  fetch(`http://localhost:8080/api/instrumento/${this.state.instrumentos.id}`, {
                method: 'delete',
                headers: {'Content-Type': 'application/json'}
            });
            alert("Instrumento Eliminado!, por favor redirijase al productos");
            
            
        }  

    render(){
        const instrumentoEncontrado = this.state.instrumentos;
        
    
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container>
                
                    <br></br>
                    <br></br>
                <Row>
                    <Col>
                        <img className="minAltoImg" src={`data:image/png;base64,${instrumentoEncontrado.foto}`}/>
                        <p></p>                       
                        <Row>
                            <Col>
                                <h2 style={{fontSize: 16, fontFamily:"Helvetica"}}>Descripcion:</h2>
                                <p></p>
                                <h1 style={{fontSize: 13, fontFamily:"Helvetica"}}>{instrumentoEncontrado.descripcion}</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>{instrumentoEncontrado.cantidadVendida} Vendidos</h2></Col>
                        </Row>
                        <Row>
                            <Col><h1>{instrumentoEncontrado.instrument}</h1></Col>
                        </Row>
                        <Row>
                            <Col><h1 style={{fontSize: 45, color: 'grey',  fontFamily:"Helvetica"}}>${instrumentoEncontrado.precio}</h1></Col>
                        </Row>
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>Marca: {instrumentoEncontrado.marca}</h2></Col>
                        </Row>
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>Modelo: {instrumentoEncontrado.modelo}</h2></Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 style={{fontSize: 17}}>Costo Envio:  
                                    <a>
                                    {this.envio(`${instrumentoEncontrado.costoEnvio}`)? <a style={{color: "green",fontSize: 17}}>Envio gratis a todo el pais!</a>: <a style={{color: "red",fontSize: 17}}> ${instrumentoEncontrado.costoEnvio}</a>}
                                    </a>
                                </h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <br></br>
                        <Button variant="info" href="/productos" style={{ height: '50px', width: '150px',fontSize: 19 }}>Volver</Button>
                        <Button variant="info" href={`/actualizar/${instrumentoEncontrado.id}`} style={{ height: '50px', width: '150px',fontSize: 19 }}>Editar</Button>
                        <Link to="/productos">
                            <Button variant="info" onClick={() => this.deleteInstrumento()} style={{ height: '50px', width: '150px',fontSize: 19 }}>Eliminar</Button>
                        </Link>
                        <Button variant="info" href="/crear" style={{ height: '50px', width: '150px',fontSize: 19 }}>Crear</Button>
                    </Col>
                </Row>  
            
                </Container>
            </React.Fragment>
            
        );

    }
}

export default DetalleInstrumento;
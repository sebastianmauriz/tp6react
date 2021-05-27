import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Tarjeta extends Component{
    
    render(){
        return (
            <React.Fragment>
                
                <Card style={{ width: '18rem' }} className="margenesTarjeta"> 
                <Card.Img variant="top" className="maxAltoImg" src={require(`../assets/images/${this.props.imagen.toLowerCase()}`).default} />
                <Card.Body>
                    <Card.Title>{this.props.nombre}</Card.Title>
                    <Card.Text>
                    ${this.props.precio}
                    </Card.Text>
                    <Button href={`detalleInstrumento/${this.props.id}`} variant="primary">Detalle</Button>
                </Card.Body>
                </Card>
            </React.Fragment>
            
        );

    }
}

export default Tarjeta;
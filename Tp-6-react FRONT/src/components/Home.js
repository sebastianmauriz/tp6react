import React, { Component } from 'react';
import Navigation from './Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <body style={{ fontSize: 20, fontFamily: "Helvetica", padding: '30px 0px 0px 60px ',width:'80rem',  display: "center", justifyContent: "center", alignItems: "center"}} >
                   
                    <a>
                        <Jumbotron fluid>
                              
                                <h1 style={{padding: '20px'}}>Musical Hendrix</h1>
                                <p style={{padding: '20px'}}>
                                Es una tienda de instrumentos musicales con ya más de 15 años de experiencia. 
                                </p>
                                <p style={{padding: '20px'}}>
                                Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
                                </p>
                                <p style={{padding: '20px'}}>
                                <Button variant="success" href="/productos">conoce nuestros productos</Button>
                                </p>
                                 <Card.Img style={{height:'700px' ,width:'1220px',}} src={require(`../assets/images/local.jpg` ).default }  /> 
                        </Jumbotron>
                    </a>
                   
                    
                </body>

            </React.Fragment>
        );

    }
}

export default Home;
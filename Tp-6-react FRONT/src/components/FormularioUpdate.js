import React, { Component } from 'react';
import Navigation from './Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormularioUpdate extends Component {

    constructor(){
        super();
        this.state = ({
          id:'',
          instrument:'',
          marca:'',
          modelo:'',
          precio:'',
          cantidadVendida:'',
          costoEnvio:'',
          descripcion:'',
          foto: null
        });
        
      }
      onSubmmit = (e) =>{
          e.preventDefault();
        
        //update normal sin foto
        /*
        const fetch = require('node-fetch');

        const response =  fetch(`http://localhost:8080/api/instrumento/${this.state.id}`, {
            method: 'put',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'}
        });
        */

        //update node FETCH con foto
        const FormData = require('form-data');
        const form = new FormData();
        
        form.append('instrument', this.state.instrument);
        form.append('marca', this.state.marca);
        form.append('modelo', this.state.modelo);
        form.append('precio', this.state.precio);
        form.append('costoEnvio', this.state.costoEnvio);
        form.append('cantidadVendida', this.state.cantidadVendida);
        form.append('descripcion', this.state.descripcion);
        
        form.append('archivo',  this.state.foto);
 
        fetch(`http://localhost:8080/api/instrumento/editar-con-foto/${this.state.id}`, { 
            method: 'PUT', 
            body: form
        })
        .then(res => res.json())
        .then(json => console.log(json));
        
    
        //console.log(data);
        console.log("ACTUALIZADO");
        alert("Instrumento Actualizado!, por favor redirijase al productos");

    }

    handleFile(e){
        this.setState({foto : e.target.files[0]}); 
    }

    onChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getPlatoXIdServer();
        alert("por favor seleccione una foto, si no lo hace el update no funcionara!")
        }
    
        componentWillUnmount(){
        this._isMounted = false;
        }
    
        getPlatoXIdServer(){
            const parametroId = this.props.match.params.id;
            fetch('http://localhost:8080/api/instrumento/'+parametroId)
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({id: responseJson.id});
                this.setState({instrument :responseJson.instrument});
                this.setState({marca: responseJson.marca});
                this.setState({modelo: responseJson.modelo});
                this.setState({precio: responseJson.precio});
                this.setState({cantidadVendida: responseJson.cantidadVendida});
                this.setState({costoEnvio: responseJson.costoEnvio});
                this.setState({descripcion: responseJson.descripcion});
                this.setState({foto: responseJson.foto});
                
                
                console.log("estado: ",this.state);

                
            })  
        
        } 
      
        
    render() {
         
        
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <div className="center m-4 b-4">
                <Form onSubmit={this.onSubmmit}>

                <Form.Group controlId="formBasicNro1">
                        <Form.Label>Instrumento</Form.Label>
                        <Form.Control name="instrument"  value={this.state.instrument} type="text" onChange={this.onChange} />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicNro2">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control name="marca"  value={this.state.marca} type="text" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control name="modelo" value={this.state.modelo} type="text" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro4">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control name="precio"  value={this.state.precio} type="number" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro5">
                        <Form.Label>Cantidad Vendida</Form.Label>
                        <Form.Control name="cantidadVendida"  value={this.state.cantidadVendida} type="number" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro6">
                        <Form.Label>Costo de envio</Form.Label>
                        <Form.Control name="costoEnvio"  value={this.state.costoEnvio} type="number" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro7">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control name="descripcion"  value={this.state.descripcion} type="text" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro8">
                        <Form.Label>Imagen</Form.Label>
                        <input type="file" name="foto" id="foto" onChange={(e) => this.handleFile(e)}/>
                        <img className="minAltoImg" name="fotoImg" src={`data:image/png;base64,${this.state.foto}`}/>
                    </Form.Group>


                    
                    <Button variant="primary" type="submit">
                    Editar
                    </Button>
                   
                    
                    
                </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormularioUpdate;
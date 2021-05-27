import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';



class Fila extends Component{
    
    envio(envio) {
        
        if (envio == 'G') {
            
            
            return true;
        }else{
            return false;
        }
      }
    render(){
        const style = {
            
           
            color : 'black',
            fontSize: 25,
            fontFamily: "Helvetica"

          };
          const img = {
            
            padding: '0',
            width: '13rem', 
          }; 

          const pos = {
            padding: '30px 0px 0px 15px ',
            width: '80rem',
          }; 

          
          

        return (
            
            
            <React.Fragment>
                
                
                <table className="table">
                
                    <tbody>
                        <tr>
                            <td >
                                <Card  style={img} className="margenesTarjeta">
                                    <a href={`detalleInstrumento/${this.props.id}`}>
                                        <Card.Img  className="maxAltoImg" src={`data:image/png;base64,${this.props.foto}`}  />
                                        
                                    </a>
                                </Card>
                            </td>

                            <td style={pos} >
                                <tr>
                                    <a style={style} href={`detalleInstrumento/${this.props.id}`} >{this.props.nombre}</a>
                                </tr>
                                <tr>
                                    <a style={{fontSize: 30,fontFamily: "Helvetica"}}>
                                    ${this.props.precio}

                                    </a>
                                </tr>
                                <tr>
                                    <a>
                                        {this.envio(`${this.props.envio}`)? <a style={{color: "green",fontSize: 17}}>Envio gratis a todo el pais!</a>: <a style={{color: "red",fontSize: 17}}>envio ${this.props.envio}</a>}
                                    </a>
                                </tr>
                                <tr>
                                    {this.props.vendidos} vendidos
                                </tr>
                                
                            </td>

                        </tr>  
                        
                    </tbody>
                </table>
            </React.Fragment>
            
        );

    }
}

export default Fila;
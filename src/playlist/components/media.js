import React, { PureComponent } from 'react';
//import React from 'react';
import './media.css';
import PropTypes from 'prop-types';

// Otra forma de hacerlo = class Media extends PureComponent
class Media extends PureComponent {
    // Con EcmaScript 6
    //constructor (props){
      //  super(props)
        //this.state = {
          //  author: props.author  }
        // AQUI SE ESTA ENLAZANDO EL EVENTO HANDLECLICK CON EL COMPONENTE QUE ESTA EN
      // LA CLASE MEDIA UTILIZANDO EL METODO 'BIND()'
      //  this.handleClick = this.handleClick.bind(this);
    // Con ES7
    state = {
        author: 'Eden Gomez Gress',
    }

    // Con ES7
    
    // handleClick = (event) => { // ARROW FUNCTIN HEREDAN SIEMPRE EL CONTEXTO DE SU PADRE
    //     //console.log(this.props.title)
    //     //this.setState({
    //       //  author: 'Leonidas Esteban',
    //     //})//Metodo especial para cambiar el estado
    // }
    render(){
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid green' 

            }
        }
// <!--EL THIS SE PONE PORQUE VAMOS A LLAMAR A ALGO QUE ESTA EN NUESTRO COMPONENTE 'MEDIA'
        return(
            <div className="Media Media-box text-content" onClick={this.props.handleClick}> 
                <div className="Media-cover Media-box text-content">
                    <img 
                        className="Media-image Media-box text-content"
                        src= { this.props.cover }
                        alt="React Image"
                        width={260}
                        height={160}
                    /> 
                    <h3 className="Media-title Media-box text-content">{ this.props.title }</h3>
                    <p className="Media-author Media-box text-content">{ this.props.author }</p>
                </div>
            </div>
        )
    }

}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;
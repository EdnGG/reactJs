import React from 'react';
// Otra forma de hacerlo = import React,  { Component } from 'react';
import Media from './media.js';
import './playlist.css';


//
// class Playlist extends Component 

function Playlist (props){
    console.log(props.data);
    return (
            <div className="Playlist "> 
               { 
               props.playlist.map( (item)=> { 
                    return <Media  handleClick={props.handleOpenModal} {...item} key={item.id} />    
                    //return <Media <-- (Este es un componente) title ={item.title} <-- (Este es una propiedad) key={item.id}/>
                    })
                }
            </div>    
           )
}

export default Playlist;
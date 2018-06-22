
import React from 'react';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom';
//import Playlist from './src/playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json';


const app = document.getElementById('app');
const message = <h1> Hey there!! :) </h1>

render(<Home data={data} />, app);
//ReactDOM.render(<Media/>, app);
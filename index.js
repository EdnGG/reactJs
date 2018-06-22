
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
//import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';


const homeContainer = document.getElementById('home-container');
//const modalContainer = document.getElementById('modal-container');



render(<Playlist data={data}/>, homeContainer );
//ReactDOM.render(<Media/>, app);
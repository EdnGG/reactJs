import React, { Component } from 'react';
import { createPortal } from 'react-dom';
//import React from 'react';

class ModalContainer extends Component {
    render() {
        return createPortal(
            this.props.children,
            document.getElementById('modal-container')

        )

    }
}

export default ModalContainer;
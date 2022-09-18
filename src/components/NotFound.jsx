import React, { Component } from 'react';
import './css/notFound.css'

class NotFound extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className='notFound'>
            <h2>Ooooops!!</h2>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </div>);
    }
}
 
export default NotFound;
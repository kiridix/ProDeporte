import React, { Component } from 'react';
import './Add.css';

class Add extends Component {
    render(){
    
    return(

        <img className="col-2 p-2" src={this.props.add} alt={this.props.addName}/>

    )

    }

}

export default Add;
import React, { Component } from 'react';
//import './EventsList.css';
import Navigation from '../Navigation/Navigation';
import Evento from '../Evento/Evento';

class EventsList extends Component {
    render(){
    
    return(
        <div className="row col-12 justify-content-center">
        <Navigation></Navigation>
        <div className="col-xs-12 col-md-8">
            <Evento fecha="Mañana"></Evento>
            <Evento fecha="Mañana"></Evento>
            <Evento fecha="Mañana"></Evento>
            <Evento fecha="Mañana"></Evento>
            <Evento fecha="Mañana"></Evento>
        </div>
        </div>
    )

    }
}


export default EventsList;
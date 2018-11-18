import React, { Component } from 'react';
import './Evento.css';

class Evento extends Component {
    render(){
    
    return(

        <section className="row col-12 m-2">
            <div className="container">
                <div className="card">
                    <div className="row ">
                        <div className="col-xs-6 col-md-4">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100 h-100"/>
                        </div>
                        <div className="col-xs-5 col-md-7 px-3">
                            <div className="card-block px-3">
                            <h4 className="card-title">Titulo</h4>
                            <p className="card-text">Categoria</p>
                            <p className="card-text">Fecha</p>
                            <p className="card-text">Lugar</p>
                            <a href="#" className="btn btn-primary"><i class="fas fa-sign-in-alt"></i>Inscribirme</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

    }

}

export default Evento;
import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="container col-sm-12 col-xs-12 col-md-8 mb-4">
        <div className="row">
          <div className="col-md-12">
                  <div className="input-group" id="adv-search">
                      <input type="text" className="form-control" placeholder="Nombre del evento" />
                      <div className="input-group-btn">
                          <div className="btn-group" role="group">
                              <div className="dropdown dropdown-lg">
                                  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"></button>
                                  <div className="dropdown-menu dropdown-menu-right" role="menu">
                                      <form className="form-horizontal row justify-content-center" role="form">
                                        <div className="form-group col-12">
                                          <label htmlFor="filter">Categoria</label>
                                          <select className="form-control">
                                              <option value="0" selected>Categoria</option>
                                              <option value="1">CAT</option>
                                              <option value="2">CAT</option>
                                              <option value="3">CAT</option>
                                              <option value="4">CAT</option>
                                          </select>
                                        </div>
                                        <div className="form-group col-6">
                                          <label htmlFor="contain">Fecha inicio</label>
                                          <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-6">
                                          <label htmlFor="contain">Fecha fin</label>
                                          <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="contain">Lugar</label>
                                          <input className="form-control" type="text" />
                                        </div>
                                        <button type="submit" className="btn btn-primary col-11 m-2"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                      </form>
                                  </div>
                              </div>
                              <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
        </div>
    )

  }
}
export default Navigation;
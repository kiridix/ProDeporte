import React, { Component } from 'react';
import './index.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Evento from './components/Evento/Evento';
import Add from './components/Add/Add';
import Header from './components/Header';
import EventsList from './components/EventsList/EventsList';

class App extends Component {
  render() {
    return (
        <main className="row justify-content-center bg-white m-0 p-0">
        <Header/>
        <EventsList/>
        </main>

    );
  }
}

export default App;

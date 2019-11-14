import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// Importamos materialize
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <body>todos somos amigos</body>
        <Footer />
      </div>
    );
  }
}

export default App;

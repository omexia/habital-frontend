import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Table from '../components/Table';
import M from 'materialize-css';

class PropertyManager extends React.Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
          });
    }

  render() {
    return (
      <div>
        <Navbar />
          <div className="container">
            <h5>Mis propiedades</h5>
            <a class="btn-floating btn-small waves-effect waves-light right modal-trigger" href="#modal"><i class="material-icons">add</i></a>
            <div class="modal" id="modal">
                <div class="modal-content">
                    <p>HOLA A TODOS</p>
                </div>
                <div class="modal-footer">
                    <a href="" class="btn modal-close">Cerrar</a>
                </div>
            </div>           
            <Table />
          </div>
        <Footer />
      </div>
    );
  }
}

export default PropertyManager;
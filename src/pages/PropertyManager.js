import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Modal from "../components/Modal";
import "./PropertyManager.css";
import M from "materialize-css";

class PropertyManager extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container table-container">
          <h5 class="title">Mis propiedades</h5>
          <a class="btn-floating btn-small waves-effect waves-light right modal-trigger" href="#modal">
            <i class="material-icons">add</i>
          </a>
          <div class="modal modal-fixed-footer" id="modal">
            <div class="modal-content">
              <Modal />
            </div>
            <div class="modal-footer">
              <a href="#/homes" class="modal-close waves-effect waves-green btn-flat">
                Cerrar
              </a>
              <a href="#" class="btn waves-effect waves-green addBtn">
                Agregar
              </a>
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
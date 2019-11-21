import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Modal from "../components/Modal";
import "./PropertyManager.css";
import M from "materialize-css";
import { getHomes, saveHomes } from "../services/homesService";

class PropertyManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }

  // addHomeEvent(event){
  //   event.preventDefault();
  //   const {homeValue, homes} = this.state;
  //   saveHomes({
  //     home_name: homeValue,
  //     home_owner: homeOwner
  //   })
  //   .then(data => {
  //     if(data.success) {
  //       this.setState({
  //         tasks: [...tasks, taskValue],
  //         taskValue: ''
  //       });
  //     }
  //   });
  // }

  // onChange(event) {
  //   console.log(event);
  //   // const {taskValue} = this.state;
  //   this.setState({
  //     taskValue: event.target.value
  //   });
  // }

  loadHomes() {
    return getHomes().then(homes => {
       this.setState({homes})
    });
  }

  componentDidMount() {
    this.loadHomes();
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
          <h5 className="title">Mis propiedades</h5>
          <a className="btn-floating btn-small waves-effect waves-light right modal-trigger" href="#modal">
            <i className="material-icons">add</i>
          </a>
          <div className="modal modal-fixed-footer" id="modal">
            <div className="modal-content">
              <Modal />
            </div>
            <div className="modal-footer">
              <a to="/homes" className="modal-close waves-effect waves-green btn-flat">
                Cerrar
              </a>
              <a to="#" className="btn waves-effect waves-green addBtn">
                Agregar
              </a>
            </div>
          </div>
          <Table allHomes={this.state.homes}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PropertyManager;
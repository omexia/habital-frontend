import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Modal from "../components/Modal";
import "./styles/PropertyManager.css";
import M from "materialize-css";
import { getHomes, saveHomes } from "../services/homesService";

class PropertyManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      form: {
        home_name: '',
        home_owner: '',
        home_address: '',
        home_mts: '',
        home_value: '',
        home_predial: '',
      },
    };
  }

  loadHomes() {
    return getHomes().then(homes => {
       this.setState({homes})
    });
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({error: null });

    try {
      await saveHomes(this.state.form);
      this.loadHomes();
      console.log(this.state.form);
    } catch (error) {
      this.setState({error: error });
    }
  };

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
              <Modal 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
            <div className="modal-footer">
              <a to="/homes" className="modal-close waves-effect waves-green btn-flat">
                Cerrar
              </a>
              <a to="/homes" className="modal-close btn waves-effect waves-green addBtn" onClick={this.handleSubmit}>
                Agregar
              </a>
            </div>
          </div>
          <Table allHomes={this.state.homes} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default PropertyManager;
import React, { Component } from "react";
import "./styles/modal.css";

class Modal extends Component {
  render() {
    return (
      <div>
        <h6 className="title-modal">Agrega una nueva propiedad</h6>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="home_name" type="text" className="validate"></input>
                <label htmlFor="home_name">Nombre clave</label>
              </div>
              <div className="input-field col s6">
                <input id="home_owner" type="text" className="validate"></input>
                <label htmlFor="home_owner">Propietario</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="home_address" type="text" className="validate"></input>
                <label htmlFor="home_address">Dirección</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input id="home_mts" type="number" className="validate"></input>
                <label htmlFor="home_mts">Mts<sup>2</sup></label>
              </div>
              <div className="input-field col s3">
                <input id="home_value" type="number" min="0.00" step="any" className="validate"></input>
                <label htmlFor="home_value">Valor catastral</label>
              </div>
              <div className="input-field col s3">
                <input id="home_predial" type="number" className="validate"></input>
                <label htmlFor="home_predial">No. de predial</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;

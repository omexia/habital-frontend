import React, { Component } from "react";
import "./styles/modal.css";

class Modal extends Component {
  render() {
    return (
      <div>
        <h6 class="title-modal">Agrega una nueva propiedad</h6>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="home_name" type="text" class="validate"></input>
                <label for="home_name">Nombre clave</label>
              </div>
              <div class="input-field col s6">
                <input id="home_owner" type="text" class="validate"></input>
                <label for="home_owner">Propietario</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="home_address" type="text" class="validate"></input>
                <label for="home_address">Dirección</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s3">
                <input id="home_mts" type="number" class="validate"></input>
                <label for="home_mts">Mts<sup>2</sup></label>
              </div>
              <div class="input-field col s3">
                <input id="home_value" type="number" min="0.00" step="any" class="validate"></input>
                <label for="home_value">Valor catastral</label>
              </div>
              <div class="input-field col s3">
                <input id="home_predial" type="number" class="validate"></input>
                <label for="home_predial">No. de predial</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;

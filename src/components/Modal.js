import React, { Component } from "react";
import "./styles/modal.css";

class Modal extends Component {

  render() {
    return (
      <div>
        <h6 className="title-modal">Agrega una nueva propiedad</h6>
        <div className="row">
          <form className="col s12" onSubmit={this.props.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="text"
                  name="home_name"
                  value={this.props.formValues.home_name}
                />
                <label htmlFor="home_name">Nombre clave</label>
              </div>
              <div className="input-field col s6">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="text"
                  name="home_owner"
                  value={this.props.formValues.home_owner}
                />
                <label htmlFor="home_owner">Propietario</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="text"
                  name="home_address"
                  value={this.props.formValues.home_address}
                />
                <label htmlFor="home_address">Dirección</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="number"
                  min="0.00"
                  step="any"
                  name="home_mts"
                  value={this.props.formValues.home_mts}
                />
                <label htmlFor="home_mts">Mts<sup>2</sup></label>
              </div>
              <div className="input-field col s3">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="number"
                  min="0.00"
                  step="any"
                  name="home_value"
                  value={this.props.formValues.home_value}
                />
                <label htmlFor="home_value">Valor catastral</label>
              </div>
              <div className="input-field col s3">
                <input
                  onChange={this.props.onChange}
                  className="validate"
                  type="number"
                  name="home_predial"
                  value={this.props.formValues.home_predial}
                />
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

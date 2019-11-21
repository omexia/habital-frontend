import React, { Component } from "react";
import propTypes from 'prop-types';
import "./styles/table.css";


function ViewData(props) {
  const data = Object.values(props.data);
  const data2 = data.map((value, index) => {
    return <td width="2%" key={index}>{value}</td>;
  });
return (
  <tr>
    {data2}
  </tr>);
}

function ListHomes (props) {
  const listData = props.allHomes;
  const listMyDataPretty = listData.map((data, key) => {
    return <ViewData key={key} data={data} />;
  });
  return (
    <React.Fragment>
      {listMyDataPretty}
    </React.Fragment>
  )
}

function Table(props) {

  return (
    <div>
      <table className="striped responsive-table myTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Propietario</th>
            <th>Dirección</th>
            <th>MTS<sup>2</sup></th>
            <th>Valor Catastral</th>
            <th>No. de Predial</th>
          </tr>
        </thead>

        <tbody>
            <ListHomes allHomes={props.allHomes}/>
        </tbody>
      </table>
      </div>
    );
  }

export default Table;

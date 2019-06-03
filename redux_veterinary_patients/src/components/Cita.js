/* Modules */
import React, { Component } from "react";

/* Redux */
import { connect } from "react-redux";

/* Actions */
import { deleteAppt } from "../actions/apptsActions";

class Cita extends Component {
  render() {
    const { appt } = this.props;

    const releaseDeleteAppt = () => {
      deleteAppt(appt.id);
    };

    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{appt.mascota}</h3>
          <p className="card-text">
            <span>Nombre Dueño: </span> {appt.propietario}
          </p>
          <p className="card-text">
            <span>Fecha: </span> {appt.fecha}
          </p>
          <p className="card-text">
            <span>Hora: </span> {appt.hora}
          </p>
          <p className="card-text">
            <span>Sintomas: </span>
          </p>
          <p className="card-text">{appt.sintomas}</p>

          <button className="btn btn-danger" onClick={releaseDeleteAppt}>
            Borrar &times;
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteAppt }
)(Cita);

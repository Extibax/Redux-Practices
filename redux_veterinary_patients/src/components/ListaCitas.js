/* Modules */
import React, { Component } from "react";

/* Redux */
import { connect } from "react-redux";

/* Actions */
import { getAppts } from "../actions/apptsActions";

/* Components */
import Cita from "./Cita";

class ListaCitas extends Component {
  componentDidMount() {
    this.props.getAppts();
  }

  /* Imprimir un mensaje en base a si hay citas o no */
  render() {
    const { appts } = this.props.appts;

    const message =
      Object.keys(appts).length === 0
        ? "No hay citas"
        : "Administra las citas aqui";

    return (
      <div className="card mt-2 py-5">
        <div className="card-body">
          <h2 className="card-title text-center">{message}</h2>

          <div className="lista-citas">
            {appts.map(appt => (
              <Cita key={appt.id} appt={appt} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appts: state.appts
});

export default connect(
  mapStateToProps,
  { getAppts }
)(ListaCitas);

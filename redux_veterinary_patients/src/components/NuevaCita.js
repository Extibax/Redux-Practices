/* Modules */
import React, { Component } from "react";
import uuid from "uuid";

/* Redux */
import { connect } from "react-redux";

/* Actions */
import { addAppt } from "../actions/apptsActions";

/* Properties */
const initialState = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...initialState };

  handleChange = e => {
    /* Colocar lo que el usuario escribe en el state */
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    /* Extraer los valores del state */
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    /* Validar que todos los campos esten llenos */
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });

      /* Detener la ejecucion */
      return;
    }

    /* Generar objeto con los datos */
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    /* Agregar la cita al state de App */
    this.props.addAppt(nuevaCita);

    /* Colocar en el state el stateInitial */
    this.setState({
      ...initialState
    });
  };

  render() {
    /* Extraer valor del state */
    const { error } = this.state;

    return (
      <div className="card mt-5 p-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  name="sintomas"
                  placeholder="Sintomas"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Agregar Nueva Cita"
              className="py-3 mt-2 btn btn-success btn-block"
            />
          </form>
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
  { addAppt }
)(NuevaCita);

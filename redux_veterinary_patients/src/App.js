/* Modules */
import React, { Component } from "react";

/* Redux */
import { Provider } from "react-redux";

/* Store */
import store from "./store";

/* Styles */
import "./bootstrap.min.css";

/* Components */
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  /* Cuando la aplicacion carga */
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header title="Administrador Pacientes Veterinaria" />
          <div className="row">
            <div className="col-md-7 mx-auto">
              <NuevaCita crearNuevaCita={this.crearNuevaCita} />
            </div>
            <div className="mt-5 col-md-5 mx-auto">
              <ListaCitas eliminarCita={this.eliminarCita} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

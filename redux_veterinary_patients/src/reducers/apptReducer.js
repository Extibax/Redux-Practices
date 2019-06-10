/* Actions */
import {
  SHOW_APPOINTMENTS,
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT
} from "../actions/types";

/* Initial State, Each reducer must have its own state */
const initialState = {
  appts: [
    {
      id: 0,
      fecha: "2019-06-03",
      hora: "10:30",
      mascota: "Max",
      propietario: "Juan",
      sintomas: "Hungry"
    },
    {
      id: 1,
      fecha: "2019-06-03",
      hora: "10:30",
      mascota: "Lex",
      propietario: "Juan",
      sintomas: "Hungry"
    },
    {
      id: 2,
      fecha: "2019-06-03",
      hora: "10:30",
      mascota: "Tox",
      propietario: "Juan",
      sintomas: "Hungry"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_APPOINTMENTS:
      return {
        ...state
      };

    case ADD_APPOINTMENT:
      return {
        ...state,
        appts: [...state.appts, action.payload]
      };

    case DELETE_APPOINTMENT:
      console.log("Delete Appointment Lau");
      const newApptsArray = state.appts.filter(
        appt => appt.id !== action.payload
      );
      console.log(newApptsArray);
      return {
        ...state,
        appts: newApptsArray
      };

    default:
      console.log(state);
      return state;
  }
}

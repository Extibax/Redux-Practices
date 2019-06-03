/* Actions */
import {
  SHOW_APPOINTMENTS,
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT
} from "./types";

export const getAppts = () => {
  console.log("Show Appts Launched");
  return {
    type: SHOW_APPOINTMENTS
  };
};

export const addAppt = appt => {
  console.log("Add Appt Launched");
  return {
    type: ADD_APPOINTMENT,
    payload: appt
  };
};

export const deleteAppt = id => {
  console.log("Delete Appt Launched", id);
  return {
    type: DELETE_APPOINTMENT,
    payload: id
  };
};

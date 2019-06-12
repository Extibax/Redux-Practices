import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from "redux-actions";

const customers = [
  {
    dni: "2700",
    name: "Juan Bedoya",
    age: 37
  },
  {
    dni: "4500",
    name: "Juan Sebastian",
    age: 20
  },
  {
    dni: "1200",
    name: "Sebastian Piedrahita",
    age: 10
  }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);

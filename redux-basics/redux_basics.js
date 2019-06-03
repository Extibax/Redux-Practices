const redux = require("redux");

const createStore = redux.createStore;

/* Initial State */
const initialState = {
  users: []
};

/* Reducer */
/* Params: State & Action */
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      users: action.name
    };
  }

  if (action.type === "SHOW_USERS") {
    return {
      ...state
    };
  }

  return state;
};

/* Create Store & Store (Contains the state of the application) */
/* 3 Params: reducer, initial state, applymiddleware */
const store = createStore(rootReducer);
console.log(store.getState());

/* Subscribe */
store.subscribe(() => {
  console.log("Something changed...", store.getState());
});

/* Dispatch: It is the way to change the state */
store.dispatch({
  type: "ADD_USER",
  name: "Juan"
});
store.dispatch({
  type: "SHOW_USERS"
});
console.log(store.getState());

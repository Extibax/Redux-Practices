/* Modules */
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

/* Components */
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

/* Reducers */
import rootReducer from "./reducers";

const initState = {};

const middleware = [promise];

const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/posts/new" component={PostsNew} />
          <Route exact path="/posts/:id" component={PostsShow} />
          <Route exact path="/" component={PostsIndex} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);

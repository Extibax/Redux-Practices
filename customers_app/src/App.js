import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route
              path="/customers/new"
              component={this.renderCustomerNewContainer}
            />
            <Route
              path="/customers/:dni"
              component={this.renderCustomerContainer}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

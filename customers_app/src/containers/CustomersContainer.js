/* Modules */
import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

/* Components */
import CustomersList from "../components/CustomersList";
import CustomersActions from "../components/CustomersActions";
import { fetchCustomers } from "../actions/fetchCustomers";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };

  renderBody = customers => {
    return (
      <div>
        {console.log(customers)}
        <CustomersList customers={customers} urlPath={"customer/"} />
        <CustomersActions>
          <button onClick={this.handleAddNew}>Nuevo Cliente</button>
        </CustomersActions>
      </div>
    );
  };

  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(this.props.customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {};

const mapDispatchToProps = { fetchCustomers };

const mapStateToProp = state => ({
  customers: state.customers
});

export default withRouter(
  connect(
    mapStateToProp,
    mapDispatchToProps
  )(CustomersContainer)
);

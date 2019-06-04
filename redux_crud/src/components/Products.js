import React, { Component } from "react";

/* Redux */
import { connect } from "react-redux";

/* Actions */
import { showProducts } from "../actions/productsActions";

class Products extends Component {
  componentDidMount() {
    this.props.showProducts();
  }

  render() {
    return <h1>Products</h1>;
  }
}

/* State */
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { showProducts }
)(Products);

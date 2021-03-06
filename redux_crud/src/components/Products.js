import React, { Component } from "react";

/* Redux */
import { connect } from "react-redux";

/* Actions */
import { showProducts, setMessage } from "../actions/productsActions";

/* Components */
import Product from "./Product";

class Products extends Component {
  componentDidMount() {
    this.props.showProducts();
    this.props.setMessage("Hello World");
    console.log("Component Mounted")
  }

  render() {
    const { products } = this.props;

    return (
      <React.Fragment>
        <h2 className="text-center my-5">List of Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {products.map(product => (
                <Product key={product.id} info={product} />
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/* State */
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { showProducts, setMessage }
)(Products);

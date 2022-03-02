import React, { Component } from "react";
import { editProduct } from "../../redux/Product/Product.actions";
import { connect } from "react-redux";

class ProductEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      offerAmount: "",
      finalPrice: "",
      seller: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEdit = (e) => {
    e.preventDefault();

    let editProductId = parseInt(this.props.editProductId);

    this.props.editProduct(editProductId, this.state);

    this.props.navigate("/product");
  };

  render() {
    console.log(this.props);
    let inputStyles =
      "w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    let buttonStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    return (
      <div>
        <form action="" className="m-auto w-1/4 ">
          <input
            className={inputStyles}
            type="text"
            placeholder="ID"
            name="id"
            value={this.props.editProductId}
            readOnly
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Product Name"
            name="name"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Price"
            name="price"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Offer Amount"
            name="offerAmount"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Final Price"
            name="finalPrice"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Seller"
            name="seller"
            onChange={(e) => this.handleInputChange(e)}
          />
          <div className="my-2">
            <button
              className={buttonStyles}
              type="submit"
              onClick={(e) => this.handleEdit(e)}
            >
              Edit Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (id, product) => dispatch(editProduct(id, product)),
  };
};

export default connect(null, mapDispatchToProps)(ProductEdit);

import React, { Component } from "react";
// import store from "../../redux/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  createNewProduct,
  deleteProduct,
} from "../../redux/Product/Product.actions";

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      offerAmount: "",
      finalPrice: "",
      seller: "",
    };

    this.form = React.createRef();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createNewProduct(this.state);

    this.setState({
      name: "",
      price: "",
      offerAmount: "",
      finalPrice: "",
      seller: "",
    });

    this.formReset();
  };

  formReset() {
    let length = this.form.current.length;

    for (let i = 0; i < length - 1; i++) {
      this.form.current.children[i].value = "";
    }
  }

  render() {
    let inputStyles =
      "w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    let buttonStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
      marginBottom: "25px",
    };

    let trStyles = {
      border: "1px solid black",
      borderCollapse: "collapse",
      textAlign: "center",
    };

    // console.log("props", this.props.User);

    return (
      <div>
        <form action="" className="m-auto w-1/4 " ref={this.form}>
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
            type="email"
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
            placeholder="Seller Name"
            name="seller"
            onChange={(e) => this.handleInputChange(e)}
          />
          <div className="my-2">
            <button
              className={buttonStyles}
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              Add Product
            </button>
          </div>
        </form>
        <div className="m-auto justify-center inline my-4 mb-8">
          <table style={styleElement}>
            <tbody>
              {this.props.Product.length > 0 ? (
                <div>
                  <tr>
                    <td style={styleElement}>ID</td>
                    <td style={styleElement}>PRODUCT NAME</td>
                    <td style={styleElement}>PRICE</td>
                    <td style={styleElement}>OFFER AMOUNT</td>
                    <td style={styleElement}>FINAL PRICE</td>
                    <td style={styleElement}>SELLER</td>
                    <td style={styleElement}>EDIT</td>
                    <td style={styleElement}>DELETE</td>
                  </tr>
                  {this.props.Product.map((data, index) => (
                    <tr style={trStyles} key={data.id}>
                      <td style={styleElement}>{data.id}</td>
                      <td style={styleElement}>{data.product.name}</td>
                      <td style={styleElement}>{data.product.price}</td>
                      <td style={styleElement}>{data.product.offerAmount}</td>
                      <td style={styleElement}>{data.product.finalPrice}</td>
                      <td style={styleElement}>{data.product.seller}</td>
                      <td style={styleElement}>
                        <button className="text-blue">
                          <Link
                            style={{ textDecoration: "none", color: "#697be0" }}
                            to={`/productedit?id=${data.id}`}
                          >
                            EDIT
                          </Link>
                        </button>
                      </td>
                      <td style={styleElement}>
                        <button
                          className="text-blue"
                          onClick={() => this.props.deleteProduct(data.id)}
                        >
                          <Link
                            style={{ textDecoration: "none", color: "#697be0" }}
                            to="/product"
                          >
                            DELETE
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </div>
              ) : (
                "No data"
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Product: state.Product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewProduct: (id, product) => dispatch(createNewProduct(id, product)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

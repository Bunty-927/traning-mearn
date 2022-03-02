import React, { Component } from "react";
import Footer from "./Footer.component";
import Header from "./Header.component";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      indivisualData: {},
      indivisualDataLoaded: false,
      showAllData: true,
      showIndivisualData: false,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const {
      DataisLoaded,
      items,
      indivisualData,
      indivisualDataLoaded,
      showAllData,
      showIndivisualData,
    } = this.state;
    // console.log(items.data);
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
    };

    return (
      <div className="App">
        {/* <h1 style={{ textAlign: "center" }}>Product Data from fetched API </h1>{" "} */}
        {showAllData ? <Header title="Product Data from fetched API" /> : ""}

        {showAllData ? (
          <table
            style={{
              margin: "auto",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {items.data.map((item) => (
                <tr
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    textAlign: "center",
                  }}
                  key={item.id}
                >
                  <td style={styleElement}>{item.id}</td>
                  <td style={styleElement}>{item.name}</td>
                  <td style={styleElement}>
                    <button
                      onClick={() =>
                        this.setState({
                          indivisualData: item,
                          indivisualDataLoaded: true,
                          showAllData: false,
                          showIndivisualData: true,
                        })
                      }
                    >
                      More details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div></div>
        )}
        <div>
          {indivisualData && indivisualDataLoaded && showIndivisualData ? (
            <div>
              {/* <p>Detailed View</p> */}
              <Header title={indivisualData.name} />
              <span>
                <button
                  onClick={() =>
                    this.setState({
                      showAllData: true,
                      showIndivisualData: false,
                    })
                  }
                >
                  All details
                </button>
              </span>

              <table style={styleElement}>
                <tbody>
                  <tr>
                    <td style={styleElement}>ID</td>
                    <td style={styleElement}>Name</td>
                    <td style={styleElement}>Year</td>
                    <td style={styleElement}>Color</td>
                    <td style={styleElement}>Pantone Value</td>
                  </tr>
                  <tr>
                    <td style={styleElement}>{indivisualData.id}</td>
                    <td style={styleElement}>{indivisualData.name}</td>
                    <td style={styleElement}>{indivisualData.year}</td>
                    <td style={styleElement}>{indivisualData.color}</td>
                    <td style={styleElement}>{indivisualData.pantone_value}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;

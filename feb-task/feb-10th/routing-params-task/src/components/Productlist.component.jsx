import React from "react";
import { Link } from "react-router-dom";

export default function Productlist() {
  let styleElement = {
    margin: "auto",
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
    marginBottom: "25px",
  };

  let data = "";

  data = JSON.parse(localStorage.getItem("productData"));
  console.log(data);

  return (
    <div className="m-auto justify-center inline my-4">
      <table style={styleElement}>
        <tbody>
          <tr>
            <td style={styleElement}>ID</td>
            <td style={styleElement}>CAR MODEL</td>
            <td style={styleElement}>COMPANY</td>
            <td style={styleElement}>EDIT</td>
          </tr>
          {data
            ? data.map((product) => (
                <tr
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    textAlign: "center",
                  }}
                  key={product.id}
                >
                  <td style={styleElement}>{product.id}</td>
                  <td style={styleElement}>{product.car_model}</td>
                  <td style={styleElement}>{product.company}</td>
                  <td style={styleElement}>
                    <button className="text-blue">
                      <Link
                        style={{ textDecoration: "none", color: "#697be0" }}
                        to={`/editproduct?id=${product.id}&car_model=${product.car_model}&company=${product.company}`}
                      >
                        Edit Car Model
                      </Link>
                    </button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

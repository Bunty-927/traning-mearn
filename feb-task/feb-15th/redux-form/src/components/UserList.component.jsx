import React, { Component } from "react";
import store from "../redux/store";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    // console.log(store.getState());
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

    return (
      <div className="m-auto justify-center inline my-4 mb-8">
        <table style={styleElement}>
          <tbody>
            {this.props.allData.length > 0 ? (
              <div>
                <tr>
                  <td style={styleElement}>ID</td>
                  <td style={styleElement}>FIRST NAME</td>
                  <td style={styleElement}>LAST NAME</td>
                  <td style={styleElement}>GENDER</td>
                  <td style={styleElement}>AGE</td>
                  <td style={styleElement}>QUALIFICATION</td>
                  <td style={styleElement}>IS ELIGIBLE FOR VOTING</td>
                  <td style={styleElement}>ORGANIZATION NAME</td>
                </tr>
                {this.props.allData.map((data, index) => (
                  <tr style={trStyles} key={index}>
                    <td style={styleElement}>{index}</td>
                    <td style={styleElement}>{data.user.firstName}</td>
                    <td style={styleElement}>{data.user.lastName}</td>
                    <td style={styleElement}>{data.user.gender}</td>
                    <td style={styleElement}>{data.user.age}</td>
                    <td style={styleElement}>{data.user.qualification}</td>
                    <td style={styleElement}>{data.user.isEligible}</td>
                    <td style={styleElement}>{data.user.organization}</td>
                  </tr>
                ))}
              </div>
            ) : (
              "No data"
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

/**
 * 
 {/* 
  <tr style={trStyles} key={index}>
 <td style={styleElement}>{index}</td>
 <td style={styleElement}>{data.firstName}</td>
 <td style={styleElement}>{data.lastName}</td>
 <td style={styleElement}>{data.gender}</td>
 <td style={styleElement}>{data.age}</td>
 <td style={styleElement}>{data.qualification}</td>
 <td style={styleElement}>{data.isEligible}</td>
 <td style={styleElement}>{data.organization}</td>
</tr> 
*/

const mapStateToProps = (state) => {
  console.log("map calling", state);
  return {
    allData: state,
  };
};

export default connect(mapStateToProps)(UserList);

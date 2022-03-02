import React, { Component } from "react";
import { connect } from "react-redux";

import { SaveInfo } from "../redux/User/Action.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fethedData: "",
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://retoolapi.dev/BUCPSc/posts")
      .then((res) => res.json())
      .then((json) => {
        this.props.SaveInfo(json);
      })
      .then(() => this.setState({ DataisLoaded: true }));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="m-auto w-1/2 text-center">
        <h1 className="text-4xl my-2">DASHBOARD</h1>
        <div className="text-2xl my-2">
          <p>The logged in user is - {this.props.userDetails.email}</p>
        </div>
        <p className="text-xl my-2">Below data is fetched from store</p>
        {this.state.DataisLoaded ? (
          this.props.fetchedDataFromAPI.map((data, index) => {
            return <p key={index}>{JSON.stringify(data)}</p>;
          })
        ) : (
          <h2>loading</h2>
        )}
      </div>
    );
  }
}

/*
id, body, title
*/
const mapStateToProps = (state) => {
  return {
    fetchedDataFromAPI: state.user.fetchedDataFromAPI,
    userDetails: state.user.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SaveInfo: (data) => dispatch(SaveInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

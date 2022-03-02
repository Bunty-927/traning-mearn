import React, { Component } from "react";
import CustomImage from "./CustomImage.component";
import UserDetails from "./UserDetails.component";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      isDataLoaded: false,
      indivisualData: {},
      isIndivisualDataLoaded: false,
      showAllData: false,
      showIndivisualData: false,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ userData: data, isDataLoaded: true, showAllData: true })
      )
  }

  handleShowAllData = (value) => {
    this.setState({ showAllData: value });
    // console.log("parent called ->" + value);
  };

  render() {
    const {
      userData,
      isDataLoaded,
      indivisualData,
      isIndivisualDataLoaded,
      showAllData,
      showIndivisualData,
    } = this.state;
    return (
      <div>
        {userData && isDataLoaded && showAllData ? (
          <div
            className="all-detail"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {userData.data.map((data, id) => (
              <div key={id} style={{ width: "fit-content", padding: "10px" }}>
                <p>{data.first_name}</p>
                <p>{data.email}</p>
                <CustomImage url={data.avatar} />
                <div>
                  <button
                    onClick={() =>
                      this.setState({
                        indivisualData: data,
                        isIndivisualDataLoaded: true,
                        showAllData: false,
                        showIndivisualData: true,
                      })
                    }
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="more-detail">
            {indivisualData && isIndivisualDataLoaded && showIndivisualData ? (
              <UserDetails
                obj={indivisualData}
                onShowAllData={this.handleShowAllData}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    );
  }
}

export default UserList;

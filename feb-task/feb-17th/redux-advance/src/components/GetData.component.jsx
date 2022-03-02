import React, { Component } from "react";
import { connect } from "react-redux";
import StylingConstants from "../styles/constants";
import { bindActionCreators } from "redux";
// import { SaveAddress, SaveContact, SaveEmail } from "../redux/User/Action";
import UserActionType from "../redux/User/ActionType";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      data: e.target.value,
    });
  };

  handleAddressSubmit = () => {
    console.log("Address");
    this.props.SaveAddress(this.state.data);
  };

  handleContactSubmit = () => {
    console.log("contact");
    this.props.SaveContact(this.state.data);
  };

  handleEmailSubmit = () => {
    console.log("email");
    this.props.SaveEmail(this.state.data);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="w-1/2 m-auto">
        <input
          type="text"
          className={StylingConstants.inputStyles}
          name=""
          id=""
          placeholder="enter data you want to add"
          onChange={(e) => this.handleInputChange(e)}
        />
        <div className="m-auto flex justify-evenly mt-2">
          <button
            className={StylingConstants.buttonStyles}
            onClick={() => this.handleEmailSubmit()}
          >
            Add as email
          </button>
          <button
            className={StylingConstants.buttonStyles}
            onClick={() => this.handleContactSubmit()}
          >
            Add as contact
          </button>
          <button
            className={StylingConstants.buttonStyles}
            onClick={() => this.handleAddressSubmit()}
          >
            Add as address
          </button>
        </div>
        <div>
          <h1 className="text-center text-2xl my-3">The added data :-</h1>
          <div className="flex flex-row justify-evenly">
            <div>
              <h1 className="text-center text-xl underline">Email</h1>
              {this.props.emailData.length > 0
                ? this.props.emailData.map((data, index) => {
                    return (
                      <p key={index} className="text-center">
                        {data}
                      </p>
                    );
                  })
                : "No email data"}
            </div>

            <div>
              <h1 className="text-center text-xl underline">Contact</h1>
              {this.props.emailData.length > 0
                ? this.props.contactData.map((data, index) => {
                    return (
                      <p key={index} className="text-center">
                        {data}
                      </p>
                    );
                  })
                : "No contact data"}
            </div>

            <div>
              <h1 className="text-center text-xl underline">Address</h1>
              {this.props.emailData.length > 0
                ? this.props.addressData.map((data, index) => {
                    return (
                      <p key={index} className="text-center">
                        {data}
                      </p>
                    );
                  })
                : "No address data"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emailData: state.email,
    addressData: state.address,
    contactData: state.contact,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     SaveEmail: (data) => dispatch(SaveEmail(data)),
//     SaveAddress: (data) => dispatch(SaveAddress(data)),
//     SaveContact: (data) => dispatch(SaveContact(data)),
//   };
// };

const SaveEmail = (data) => ({ type: UserActionType.GET_EMAIL, payload: data });

const SaveAddress = (data) => ({
  type: UserActionType.GET_ADDRESS,
  payload: data,
});

const SaveContact = (data) => ({
  type: UserActionType.GET_CONTACT,
  payload: data,
});

// const saveEmail = (data) => ({type: UserActionType.GET_EMAIL, payload: data})
// const saveAddress = (data) => ({type: UserActionType.GET_ADDRESS, payload: data})
// const saveContact = (data) => ({type: UserActionType.GET_CONTACT, payload: data})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ SaveEmail, SaveAddress, SaveContact }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GetData);

import React, { Component } from "react";

const editData = async (data, type) => {
  //   console.log(data, type);

  let userInput = prompt(`Enter the ${type} to be updated`);

  //   console.log(type + ":" + userInput + "->" + data.id);

  const keyName = type;
  const valueName = userInput;

  const modifiedDataObj = {
    [keyName]: valueName,
  };

  const bodyData = JSON.stringify(modifiedDataObj);

  console.log(bodyData);

  await fetch(`https://reqres.in/api/users/${data.id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: bodyData,
  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data));

  console.log("edited");
};

class EditDetails extends Component {
  render() {
    const { title, data, type } = this.props;
    return <button onClick={() => editData(data, type)}>{title}</button>;
  }
}

export default EditDetails;

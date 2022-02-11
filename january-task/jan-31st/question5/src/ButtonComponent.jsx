import React from "react";

export default function CustomButtom(props) {
  return (
    <div style={{ padding: "5px" }}>
      <button onClick={() => alert(`The button pressed is ${props.id}`)}>
        Button {props.name}
      </button>
    </div>
  );
}




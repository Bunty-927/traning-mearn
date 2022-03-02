import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home.component";

export default function ProfilePic() {
  const { id } = useParams();
  const [url, setUrl] = useState();
  //   console.log("the id is -> ", id);

  const fetchData = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((res) => setUrl(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Home />
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "150px",
        }}
      >
        {url ? (
          <h3 style={{ textAlign: "center" }}>
            {url.first_name + " " + url.last_name}
          </h3>
        ) : (
          ""
        )}
        {url ? <img src={url.avatar} alt="img" /> : ""}
      </div>
    </div>
  );
}

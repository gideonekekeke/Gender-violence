import React from "react";
import "./po.css";

function PostMaking() {
  return (
    <div className="taker">
      <div className="posting_container">
        <div className="holder">
          <input
            placeholder="name"
            style={{
              width: "80%",
              height: "40px",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="phone Number"
            style={{
              width: "80%",
              height: "40px",
              paddingLeft: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="Email"
            style={{
              width: "80%",
              height: "40px",
              paddingLeft: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="Location"
            style={{
              width: "80%",
              height: "40px",
              paddingLeft: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          />
          <textarea
            placeholder="description"
            style={{
              width: "80%",
              height: "70px",
              paddingLeft: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          />
          <br />
        </div>
      </div>
    </div>
  );
}

export default PostMaking;

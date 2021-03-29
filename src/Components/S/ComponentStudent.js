import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";

import "./com.css";
import pic from "../img/1.png";

import { useHistory } from "react-router";

function Gender() {
  return (
    <div style={{ width: "100%" }}>
      <br />
      <br />
      <center>
        <div style={{ fontWeight: "bold" }}>GENDER BASE REPORT CENTER</div>
        <br />
        <br />
        {/* <div>Please fill in your Details</div> */}
        <div
          className="my_holder"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#F3F5FB",
            width: "100%",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "5px",
              height: "360px",
              boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
            }}
          >
            <img
              src={pic}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            className="my_main"
            style={{
              width: "300px",
              backgroundColor: "lightgray",
              borderRadius: "5px",
              margin: "5px",
              height: "330px",
              boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "360px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <Input
                style={{
                  width: "250px",
                  height: "30px",
                }}
                placeholder="Name"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <Input
                style={{
                  width: "250px",
                  height: "30px",
                }}
                placeholder="Email"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <Input
                style={{
                  width: "250px",
                  height: "30px",
                }}
                placeholder=" Phone Number"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <Input
                style={{
                  width: "250px",
                  height: "30px",
                }}
                placeholder="Adress"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <Input
                style={{
                  width: "250px",
                  height: "30px",
                }}
                placeholder="Location"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <TextArea
                style={{
                  width: "250px",
                  resize: "none",
                  height: "70px",
                }}
                placeholder="Report description..."
              />
            </div>
          </div>
        </div>
        <Button
          type="primary"
          // danger
          style={{
            width: "200px",
            marginTop: "5px",
            marginBottom: "10px",
            height: "50px",
          }}
        >
          Report Now
        </Button>
      </center>
    </div>
  );
}

export default Gender;

/* <div
style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}}
> *
{/* <br />
{imgPreview ? (
  <img
    src={imgPreview}
    alt="img"
    style={{
      width: "200px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "5px",
    }}
  />
) : (
  <img
    // src={}
    // alt="img"
    style={{
      width: "200px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
      backgroundColor: "red",
      marginBottom: "20px",
    }}
  />
)} */

/* {imgPreview ? (
  <Button
    type="primary"
    danger
    style={{
      width: "200px",
      marginTop: "5px",
      marginBottom: "10px",
    }}
    onClick={() => {
      setAvatar(null);
      setImgPreview(null);
    }}
  >
    Remove
  </Button>
) : null} */
// </div>

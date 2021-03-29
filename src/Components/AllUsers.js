import React, { useState, useEffect } from "react";
import { app } from "../Base";

const db = app.firestore().collection("social");
function AllUsers() {
  const [getUser, setGetUser] = useState([]);

  const gettingAllUser = async () => {
    // const gotAll = await app.auth().currentUser;

    await db.onSnapshot((snap) => {
      const item = [];
      snap.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setGetUser(item);
    });
  };

  useEffect(() => {
    gettingAllUser();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <center>
        {" "}
        <h4>all users page</h4>
      </center>
      <br />
      <br />
      <br />
      {getUser.map(({ id, fileUrl, name, createdAt }) => (
        <div style={{ width: "80%", height: "60px", border: "1px solid gray" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div style={{ height: "30px", width: "30px" }}>
              <img
                src={fileUrl}
                style={{ height: "100", width: "100%", objectFit: "cover" }}
              />
            </div>
            <h3>{name}</h3>
            <button>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;

import React, { useState } from "react";
import { app } from "./Base";

const db = app.firestore().collection("social");

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  const imageUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);

    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const SignUpUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    db.doc(newUser.user.uid).set({
      name,
      email,
      password,
      fileUrl,
      createdAt: new Date().toLocaleString(),
      dateTime: new Date().toString(),
    });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <center>
        <div
          style={{
            height: "300px",
            width: "300px",
            border: "1px solid silver",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              onChange={imageUpload}
              type="file"
              style={{ width: "80%", height: "40px" }}
            />
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
              type="text"
              style={{ width: "80%", height: "40px" }}
            />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              type="text"
              style={{ width: "80%", height: "40px" }}
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              type="text"
              style={{ width: "80%", height: "40px" }}
            />
            <br />
            <br />
            <br />
            <button
              onClick={() => {
                SignUpUser();
              }}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default SignUp;

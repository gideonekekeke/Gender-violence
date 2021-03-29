import React, { useState } from "react";
import { app } from "../Base";

const post = app.firestore().collection("posting");

function NewPost() {
  const [content, setContent] = useState("");

  const makePost = async () => {
    const making = await app.auth().currentUser;

    if (making) {
      await post.doc().set({
        content,
        poster: making.uid,
        postedBy: new Date().toLocaleString(),
        dateTime: new Date().toString(),
      });
    }
  };

  return (
    <div>
      <center>Make a post</center>

      <center>
        <div style={{ width: "200px", height: "200px", background: "silver" }}>
          <br />
          <textarea
            style={{ height: "100px", resize: "none" }}
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              makePost();
            }}
          >
            send
          </button>
        </div>
      </center>
    </div>
  );
}

export default NewPost;

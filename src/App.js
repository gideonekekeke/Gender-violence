import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllUsers from "./Components/AllUsers";
import Header from "./Components/Header";
import NewPost from "./Components/NewPost";
import NewsFeed from "./Components/NewsFeed";
import PostMaking from "./Components/PoatMaking";
import Gender from "./Components/S/ComponentStudent";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Gender />
    </div>
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/" component={NewsFeed} />
    //     <Route exact path="/signup" component={SignUp} />
    //     <Route exact path="/user" component={AllUsers} />
    //     <Route exact path="/post" component={NewPost} />
    //   </Switch>
    // </Router>
  );
}

export default App;

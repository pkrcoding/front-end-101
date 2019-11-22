import React from "react";
import { Router } from "@reach/router";
import PostList from "./PostList";
import AddPost from "./AddPost";
import Layout from "./Layout";
function App() {
  return (
    <Router>
      <PostList path="/" />
      <AddPost path="/add" />
      <Layout path="/task" />
    </Router>
  );
}

export default App;
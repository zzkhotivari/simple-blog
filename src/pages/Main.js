import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Posts from "../components/Posts";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";

function Main() {
  const { posts, postsStatus } = useContext(AppContext);

  return (
    <Container>
      {postsStatus === "FAILED" ? (
        "ERROR"
      ) : postsStatus === "LOADING" ? (
        <Spinner />
      ) : (
        <Posts posts={posts} />
      )}
    </Container>
  );
}

export default Main;

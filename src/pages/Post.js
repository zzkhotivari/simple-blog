import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import Comments from "../components/Comments";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";

export default function Post() {
  const { id } = useParams();

  const { posts, postsStatus, users, usersStatus, commentsStatus } = useContext(
    AppContext
  );

  const { post, user } = useMemo(() => {
    let post = {},
      user = {};

    posts.forEach((_post) => {
      if (parseInt(_post.id) === parseInt(id)) {
        post = _post;
      }
    });
    users.forEach((_user) => {
      if (_user.id === parseInt(post?.userId)) {
        user = _user;
      }
    });

    return {
      post,
      user,
    };
  }, [id, users, posts]);

  return (
    <>
      {[postsStatus, usersStatus, commentsStatus].includes("LOADING") ? (
        <Spinner />
      ) : [postsStatus, usersStatus, commentsStatus].includes("FAILED") ||
        !post ? (
        "Error"
      ) : (
        <Container>
          <Card className="mt-4 mb-4">
            <Card.Body>
              <Row>
                <Col>
                  <h4 className="text-left">{post?.title?.substr(0, 20)}</h4>
                </Col>
                <Col className="col-auto">
                  <NavLink href={`/user/${user?.id}`}>
                    <h3>{user?.name}</h3>
                  </NavLink>
                </Col>
              </Row>
              <Row>
                <Col className="col-auto">
                  <img src={post?.image} alt="post" />
                </Col>
                <Col>
                  <h3>{post?.body}</h3>
                </Col>
              </Row>
              <hr />
              <Comments />
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
}

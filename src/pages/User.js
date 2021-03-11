import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";
import { AppContext } from "../context/AppContext";

export default function User() {
  const { id } = useParams();
  const { users } = useContext(AppContext);

  let user = {};

  users.forEach((_user) => {
    if (parseInt(_user.id) === parseInt(id)) {
      user = _user;
    }
  });

  return (
    <Container>
      <Card className="mt-4 mb-4">
        <Row className="p-3">
          <Col>
            <h1>{user?.name}</h1>
            <h2>{user?.username}</h2>
            <h3>{user?.email}</h3>
            <h4>{`${user?.address?.city} - ${user?.address?.street} - ${user?.address?.suite}`}</h4>
            <h5>Related posts from {user?.name}</h5>
          </Col>
        </Row>
        <Card.Body>
          <Posts />
        </Card.Body>
      </Card>
    </Container>
  );
}

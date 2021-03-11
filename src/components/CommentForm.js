import React, { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const initialState = {
  name: "",
  email: "",
  body: "",
};

const CommentForm = ({ setShowModal }) => {
  const { id } = useParams();
  const [warning, setWarning] = useState("");
  const { addNewComment } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email, body } = state;

  useEffect(() => () => setWarning(""), [name, email, body]);

  const onChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (!name || !email || !body) {
      setWarning("Fields are not completed");
      e.preventDefault();
    } else {
      addNewComment({ ...state, postId: +id });
      setShowModal(false);
      e.preventDefault();
    }
  };

  return (
    <Card style={{ minWidth: "20rem" }} className="p-3">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            name="name"
            value={name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            rows={3}
            as="textarea"
            placeholder="Comment"
            required
            name="body"
            value={body}
            onChange={onChange}
          />
        </Form.Group>
        <Row>
          <Col>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Col>
          <Col />
          <Col className="text-right">
            <h4 className="warning-text">{warning ? warning : null}</h4>
            <Button variant="success" type="submit" disabled={false}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CommentForm;

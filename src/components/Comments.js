import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Modal from "./Modal";

export default function Comments() {
  const { id } = useParams();
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { comments } = useContext(AppContext);

  const _comments = [];
  comments.forEach((comment) => {
    if (parseInt(comment.postId) === parseInt(id)) {
      _comments.push(comment);
    }
  });

  return (
    <Container fluid>
      <h3>Comments {`(${_comments.length})`}</h3>
      {!_comments || _comments.length === 0 ? null : (
        <Comment {...comments[0]} />
      )}
      {showAll ? (
        _comments
          ?.slice(1)
          .map((comment) => <Comment key={comment.id} {...comment} />)
      ) : (
        <div className="text-center">
          <Button variant="info" onClick={() => setShowAll(true)}>
            Show All
          </Button>
        </div>
      )}
      <div className="text-left">
        <Button variant="success" onClick={() => setShowModal(true)}>
          Add Comment
        </Button>
      </div>
      {showModal && (
        <Modal>
          <CommentForm
            postId={id}
            setShowModal={setShowModal}
            comments={_comments}
          />
        </Modal>
      )}
    </Container>
  );
}

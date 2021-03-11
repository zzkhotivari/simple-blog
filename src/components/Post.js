import React from "react";
import { Button, Card } from "react-bootstrap";

function Post({ title, id, image }) {
  return (
    <Card>
      <img src={image} alt={title} className="card-img-top" />
      <Card.Body>
        <Card.Title>{title.substr(0, 18)}</Card.Title>
        <Button variant={"primary"} href={`/post/${id}`}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
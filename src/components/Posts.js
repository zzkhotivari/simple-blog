import React, { useContext, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { chunk } from "../utils/chunk";
import Post from "./Post";

function Posts() {
  const [currentPosts, setCurrentPosts] = useState(12);
  const { posts } = useContext(AppContext);

  const subPosts = posts?.slice(0, currentPosts);

  return (
    <Card className="mt-4 mb-4">
      <Card.Body>
        {!subPosts
          ? null
          : chunk(subPosts, 4).map((chunk, i) => (
              <Row key={`chunk_${i}`} className="mt-2">
                {chunk.map((post) => (
                  <Col key={post.id}>
                    <Post {...post} />
                  </Col>
                ))}
              </Row>
            ))}
      </Card.Body>
      <div className="text-center mb-4">
        {currentPosts >= posts?.length ? null : (
          <Button
            variant="outline-dark"
            onClick={() => setCurrentPosts(currentPosts + 12)}
          >
            Load more
          </Button>
        )}
      </div>
    </Card>
  );
}

export default Posts;

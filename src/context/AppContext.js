import React, { createContext, useCallback, useEffect, useState } from "react";
import {
  fetchComments,
  fetchPosts,
  fetchUsers,
  postComment,
  randomImage,
} from "../api";

const AppContext = createContext({});

function AppContextComponent({ children }) {
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setPostLoading(true);
      setPosts(await fetchPosts());
      setPostLoading(false);

      setUserLoading(true);
      setUsers(await fetchUsers());
      setUserLoading(false);

      setCommentsLoading(true);
      setComments(await fetchComments());
      setCommentsLoading(false);
    }, 1);
  }, []);

  const newComment = useCallback(
    (payload) => {
      postComment(payload).then((comment) => {
        let maxID = -1;
        comments.forEach((comment) => {
          if (comment.id > maxID) {
            maxID = parseInt(comment.id);
          }
        });
        setComments([...comments, { ...comment, id: maxID + 1 }]);
      });
    },
    [comments]
  );

  const value = {
    posts,
    users,
    comments,
    postLoading,
    userLoading,
    commentsLoading,
    addNewComment: newComment,
    randomImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextComponent };

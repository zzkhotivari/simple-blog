export const endpoint = "https://jsonplaceholder.typicode.com";

export const randomImage = (id) => {
  return `https://picsum.photos/id/${id}/200`;
};

export const checkResponse = async (res) => {
  if (res.status > 399) {
    throw new Error(await res.text());
  }

  const text = await res.text();
  let result = text;
  try {
    result = JSON.parse(text);
  } catch (e) {}
  return result;
};

export const fetchPosts = async () => {
  const res = await fetch(`${endpoint}/posts`);
  const posts = await checkResponse(res);

  posts.forEach((post) => {
    post.image = randomImage(`${post.id}`);
  });
  return posts;
};

export const fetchUsers = async () => {
  const res = await fetch(`${endpoint}/users`);
  return checkResponse(res);
};

export const fetchComments = async () => {
  const res = await fetch(`${endpoint}/comments`);
  return checkResponse(res);
};

export const postComment = async (payload) => {
  const res = await fetch(`${endpoint}/comments`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  return checkResponse(res);
};

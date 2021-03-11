export default function Comment({ body, name }) {
  return (
    <div className="comment">
      <h4 className="name">{name}</h4>
      <h5 className="body">{body}</h5>
    </div>
  );
}

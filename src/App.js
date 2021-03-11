import { Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Post from "./pages/Post";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Main} />
      <Route path="/post/:id" component={Post} />
      <Route path="/user/:id" component={User} />
    </div>
  );
}

export default App;

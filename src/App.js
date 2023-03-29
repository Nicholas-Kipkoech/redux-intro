import "./App.css";
import { AddPost } from "./features/posts/addPost";
import { PostsList } from "./features/posts/postLists";

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPost />
    </div>
  );
}

export default App;

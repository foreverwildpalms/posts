import React, {useState} from 'react';
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Пост', body: 'Описание поста'},
        {id: 2, title: 'Очень интересный пост', body: 'Маленькое описание поста'},
        {id: 3, title: 'Интересный пост', body: 'Большое описание поста'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

  return (
      <div className="App">
        <PostForm create={createPost} />
        <PostList posts={posts} />
      </div>
  );
}

export default App;

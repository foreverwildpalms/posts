import React, {useState} from 'react';
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Пост', body: 'Описание поста'},
        {id: 2, title: 'Интересный пост', body: 'Маленькое описание поста'},
        {id: 3, title: 'Очень интересный пост', body: 'Большое описание поста'}
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

  return (
      <div className="App">
        <PostForm create={createPost}/>
          <hr style={{margin: '15px 0'}}/>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Сортировка'
            options={[
                {value: 'title', name: 'По заголовку'},
                {value: 'body', name: 'По описанию'}
            ]}
          />
          {posts.length
              ? <PostList posts={posts} remove={deletePost} />
              : <h1>Посты не найдены</h1>
          }
      </div>
  );
}

export default App;

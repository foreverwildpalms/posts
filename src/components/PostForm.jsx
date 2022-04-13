import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import React, {useState} from 'react';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form className="form">
            <MyInput
                type="text"
                value={post.title}
                placeholder="Название поста"
                onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput
                type="text"
                value={post.body}
                placeholder="Название поста"
                onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
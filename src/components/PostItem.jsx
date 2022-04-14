import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">{props.order + 1}. {props.post.title}</div>
                <div className="post__text">{props.post.body}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
    );
};

export default PostItem;
import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">{props.order + 1}. {props.post.title}</div>
                <div className="post__text">{props.post.body}</div>
            </div>
            <button className="post__btn">Удалить</button>
        </div>
    );
};

export default PostItem;
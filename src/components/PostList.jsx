import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    return (
        <div>
            <h1>Список постов</h1>
            {posts.map((post, index) =>
                <PostItem post={post} key={post.id} order={index} remove={remove} />
            )}
        </div>
    );
};

export default PostList;
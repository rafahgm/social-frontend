import React from "react";
import "./style.scss";

type PostProps = {
    user: {
        id: string;
        picture: string;
        firstName: string;
        lastName: string;
    };
    title: string;
    content: string;
    image: string;
};

const Post = (props: PostProps) => {
    return (
        <div className="post">
            <div className="post__header">
                <img src={props.user.picture} />
                <span>{props.user.firstName + " " + props.user.lastName}</span>
            </div>
            <h2>{props.title}</h2>

            <h5>{props.content}</h5>
            <img src={props.image} alt="post" />
        </div>
    );
};

export default Post;

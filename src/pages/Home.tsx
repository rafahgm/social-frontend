import React, { useEffect, useState } from "react";
import Post from "../components/post";

type PostType = {
    _id: string;
    user: {
        id: string;
        picture: string;
        firstName: string;
        lastName: string;
    };
    title: string;
    content: string;
    images: string[];
};

const Home = () => {
    // const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PostType[]>([]);
    useEffect(() => {
        // Fetch posts
        fetch("http://localhost:3333/post").then((res) => {
            res.json().then((data) => {
                setPosts([...data]);
            });
        });
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post
                        key={post._id}
                        user={post.user}
                        title={post.title}
                        content={post.content}
                        image={post.images[0]}
                    />
                );
            })}
        </div>
    );
};

export default Home;

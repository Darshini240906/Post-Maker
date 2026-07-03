import { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className='feed-section'>
            <h1>Feed</h1>
            {posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.img} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            )}
        </section>
    );
};

export default Feed;
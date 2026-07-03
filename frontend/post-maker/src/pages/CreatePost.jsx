import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await axios.post('http://localhost:3000/create-post', formData);
            console.log(response.data);
            navigate('/feed');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className='create-post-section'>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="img" accept="image/*" />
                <input type="text" name="caption" placeholder='Enter caption' />
                <button type='submit'>Create Post</button>
            </form>
        </section>
    );
};

export default CreatePost;
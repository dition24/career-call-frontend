//right details

import {useState} from 'react'

function HiresSelect(props) {

    const [newPost, setNewPost] = useState({
        company: "",
        position: "",
        location: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewPost((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(newPost);
        setNewPost({
            company: "",
            position: "",
            location: "",
            description: "",
        });
    };

    
    return (
        <div className="ad-section">
            <h1>hi</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newPost.company}
                name="company"
                placeholder="company"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newPost.position}
                name="position"
                placeholder="position"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newPost.location}
                name="location"
                placeholder="location"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newPost.description}
                name="description"
                placeholder="description"
                onChange={handleChange}
                />
                <input type="submit" value="Create Post" />
            </form>
            
        </div>
    )
}

export default HiresSelect
//right details
import { useState } from 'react'

function HiresSelect(props) {

    const [newPost, setNewPost] = useState({
        company: "",
        title: "",
        location: "",
        description: "",
        salary: ""
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
        props.createCareer(newPost);
        setNewPost({
            company: "",
            title: "",
            location: "",
            description: "",
            salary: ""
        });
    };

    return (
        <div className='hireContain'>
            <form className='hireForm' onSubmit={handleSubmit}>
                <input
                className='reginput'
                type="text"
                value={newPost.company}
                name="company"
                placeholder="company"
                onChange={handleChange}
                />
                <input
                className='reginput'
                type="text"
                value={newPost.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
                />
                <input
                className='reginput'
                type="text"
                value={newPost.location}
                name="location"
                placeholder="location"
                onChange={handleChange}
                />
                <input
                className='desc'
                type="text"
                value={newPost.description}
                name="description"
                placeholder="description"
                onChange={handleChange}
                />
                <input 
                className='reginput'
                type="text" 
                value={newPost.salary}
                name="salary"
                placeholder="salary"
                onChange={handleChange}
                />
                <input className='submit
                ' type="submit" value="Create Post" />
            </form>
        </div>
    )
}

export default HiresSelect
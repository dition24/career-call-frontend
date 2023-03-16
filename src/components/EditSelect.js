//right details
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function EditSelect(props) {

    const [editPost, setEditPost] = useState({
        company: "",
        title: "",
        location: "",
        description: "",
        salary: ""
    });

    const navigate = useNavigate()

    // handleChange function for form
    const handleChange = (event) => {
        setEditPost((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateCareer(editPost, props.job._id);
        navigate(`/hires/${props.job._id}`)
    };

    useEffect(() => {
        if (props.job) {
            setEditPost(props.job)
        }
    },[props.job])

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={editPost.company}
                    name="company"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.title}
                    name="title"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.location}
                    name="location"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.description}
                    name="description"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.salary}
                    name="salary"
                    onChange={handleChange}
                    />
                    <input type="submit" value="Confirm Edit" />
                </form>
            </section>
        </div>
    )
}

export default EditSelect
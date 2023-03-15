//right details
import { useState, useEffect } from "react";

function EditSelect(props) {

    const [editPost, setEditPost] = useState({
        company: "",
        title: "",
        location: "",
        description: "",
        salary: ""
    });

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
    };

    const loaded = () => {
        return <h1>{props.job.company}</h1>
    }

    const loading =() => {
        return <h1>loading</h1>
    }

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
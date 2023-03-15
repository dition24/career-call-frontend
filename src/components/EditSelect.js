//right details
import { useState } from "react";

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
        props.createPost(editPost);
        setEditPost({
            company: "",
            position: "",
            location: "",
            description: "",
            salary: ""
             // pass in prop placeholders here
        });
    };

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={editPost.company}
                    name="company"
                    placeholder={props.company}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.title}
                    name="title"
                    placeholder={props.title}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.location}
                    name="location"
                    placeholder={props.location}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.description}
                    name="description"
                    placeholder={props.description}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editPost.salary}
                    name="salary"
                    placeholder={props.salary}
                    onChange={handleChange}
                    />
                    <input type="submit" value="Confirm Edit" />
                </form>
            </section>
        </div>
    )
}

export default EditSelect
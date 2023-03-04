//employer post page
import { useState } from "react";
import { Link } from "react-router-dom";

function Post(props) {
    // state to hold formData
    const [newPost, setNewPost] = useState({
        company: "",
        position: "",
        location: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]
        }));
    };
    
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(newPost);
        setNewForm({
            company: "",
            position: "",
            location: "",
            description: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.post.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to ={`/people/${ad._id}`}>
                    <h1>{ad.company}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    return (
        <section className="ad-section">
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
                value={newForm.position}
                name="position"
                placeholder="position"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.location}
                name="location"
                placeholder="location"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.description}
                name="description"
                placeholder="description"
                onChange={handleChange}
                />
                <input type="submit" value="Create Post" />
            </form>
            {props.post ? loaded() : loading()}
        </section>
    );
};

export default Post;
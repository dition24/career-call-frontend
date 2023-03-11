//right details

function EditSelect(props) {

    const [editPost, setEditPost] = useState({
        company: "",
        position: "",
        location: "",
        description: "",
        salary: ""
        // pass in prop placeholders here
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
                    value={editPost.position}
                    name="position"
                    placeholder={props.position}
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
                    name="descrsalaryiption"
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
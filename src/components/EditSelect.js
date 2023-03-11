//right details

function EditSelect(props) {
    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={newPost.company}
                    name="company"
                    placeholder="props.company"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newPost.position}
                    name="position"
                    placeholder="props.position"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newPost.location}
                    name="location"
                    placeholder="props.location"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newPost.description}
                    name="description"
                    placeholder="props.description"
                    onChange={handleChange}
                    />
                    <input type="submit" value="Confirm Edit" />
                    <button>DELETE</button>
                </form>
            </section>
        </div>
    )
}

export default EditSelect
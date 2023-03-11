import React from "react";

function DeleteSelect(props) {
    const handleDelete = () => {
        props.deletePost();
    };

    return (
        <div>
            <section>
                <button onClick={handleDelete}>Delete</button>
            </section>
        </div>
    );
}

export default DeleteSelect;
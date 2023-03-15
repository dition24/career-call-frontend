import React from "react";
import { Link } from "react-router-dom";
function DeleteSelect(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <h2>{props.company}</h2>
            <p>{props.description}</p>
            <section>
                <Link to="/edit">
                    <button>Edit</button>
                </Link>
                <Link>
                    <button>Delete</button>
                </Link>
            </section>
        </div>
    )
}


export default DeleteSelect;
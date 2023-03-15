import React from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';

function DeleteSelect(props) {

const navigate = useNavigate()

const handleClick = () => {
       props.deleteCareer(props.job._id)
       navigate('/hires')
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <h2>{props.company}</h2>
            <p>{props.description}</p>
            <h4>${props.salary}</h4>
            <Link to='/edit'>
                <button>edit</button>
            </Link>
           <button onClick={handleClick}>delete</button>
        </div>
    )
}



export default DeleteSelect;
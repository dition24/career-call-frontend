import React from "react";
import { useNavigate, Link, } from 'react-router-dom';

function DeleteSelect(props) {

const navigate = useNavigate()

const handleClick = () => {
       props.deleteCareer(props.job._id)
       navigate('/hires')
    }

    return (
        <div className="deleteContain">
            <div className="deleteSelect">
                <h2 className="deleteh2">Career: {props.title}</h2>
                <h2 className="deleteh2">Location: {props.location}</h2>
                <h2 className="deleteh2">Company: {props.company}</h2>
                <p>{props.description}</p>
                <h3>Yearly Salary: ${props.salary}</h3>
                <div className="editdelete">
                    <Link to={`/edit/${props.job._id}`}>
                        <button className="editbtn">edit</button>
                    </Link>
                    <button className='deletebtn' onClick={handleClick}>delete</button>
                </div>
            </div>
        </div>
    )
}



export default DeleteSelect;
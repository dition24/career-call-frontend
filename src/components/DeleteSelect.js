import React from "react";
import axios from 'axios';

function DeleteSelect(props) {

    const handleClick = () => {
        axios.delete(`/jobs/:id`)
            .then(response => {
                
                console.log(response);
            })
            .catch(error => {
                
                console.log(error);
            });
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <h2>{props.company}</h2>
            <p>{props.description}</p>
            <h4>${props.salary}</h4>
           <span onClick={handleClick}>delete</span>
        </div>
    )
}



export default DeleteSelect;
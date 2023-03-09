// left sidebar
import {Link} from 'react-router-dom'
// import { useState } from "react";

function Index(props) {

   
    // loaded function
    const loaded = () => {
        return props.career.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to ={`/hires/${ad._id}`}>
                    <h1>{ad.title} | {ad.company} | {ad.location}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div>
            {props.career ? loaded() : loading()}
        </div>
    )
}

export default Index
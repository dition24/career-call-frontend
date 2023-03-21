// left sidebar
import {Link} from 'react-router-dom'

function JobsIndex(props) {

   
    // loaded function
    const loaded = () => {
        return props.career.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to ={`/jobs/${ad._id}`}>
                    <h2 className='jobIndexh2'>{ad.title} | {ad.company} | {ad.location}</h2>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div className='container'>
            <div className='jobIndex'>
                {props.career ? loaded() : loading()}
            </div>
        </div>
    )
}

export default JobsIndex
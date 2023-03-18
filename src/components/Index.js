// left sidebar
import { Link } from 'react-router-dom'

function Index(props) {

   
    // loaded function
    const loaded = () => {
        return props.career.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to ={`/hires/${ad._id}`}>
                    <h2 className='indexh2'>{ad.title} | {ad.company} | {ad.location}</h2>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div className='container'>
            <div className='index'>
                {props.career ? loaded() : loading()}
            </div>
        </div>
    )
}

export default Index
import { Link } from "react-router-dom"

function Back(props) {
    return (
        <div className="btnContain">
            <Link to={props.back}>
                <button className='back'>Back</button>
            </Link>
        </div>
        
    )
}

export default Back
// employee job page (not important yet)
import { Link } from "react-router-dom"
import JobsIndex from '../components/JobsIndex'
import Nav from '../components/Nav'

function Job(props) {
    return (
        <Link to='/'>
            <button className="back">Back</button>
            <Nav />
            <JobsIndex career={props.career}/>
        </Link>
    )
}

export default Job
// employee job page 
// import { Link } from "react-router-dom"
import JobsIndex from '../components/JobsIndex'
import Nav from '../components/Nav'

function Job(props) {
    return (
        <div>
            <Nav setCareer={props.setCareer} back='/'/>
            <JobsIndex career={props.career}/>
        </div>
    )
}

export default Job
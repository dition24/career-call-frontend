// edit page for employers
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Index from '../components/Index'
import EditSelect from '../components/EditSelect'

function Edit(props) {

    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null

    return (
        <div>
            <div>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <Nav setCareer={props.setCareer} />
            <Index career={props.career} />
            <EditSelect career={props.career} updateCareer={props.updateCareer} job={job} />
        </div>
            {/* pass props to editSelect */}
        </div>
    )
}

export default Edit
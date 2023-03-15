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
        <div className='edit'>
            <Link to='/hires'>
                <button className='back'>Back</button>
            </Link>
            <Index career={props.career} />
            <EditSelect career={props.career} updateCareer={props.updateCareer} job={job} />
            {/* pass props to editSelect */}
        </div>
    )
}

export default Edit
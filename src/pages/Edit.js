// edit page for employers
import { useParams } from 'react-router-dom'
import Index from '../components/Index'
import EditSelect from '../components/EditSelect'
import Nav from '../components/Nav'

function Edit(props) {

    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null

    return (
        <div className='edit'>
            <Nav back={`/hires/${job._id}`}/>
            <Index career={props.career} />
            <EditSelect career={props.career} updateCareer={props.updateCareer} job={job} />
        </div>
    )
}

export default Edit
// edit page for employers
import { Link, useParams } from 'react-router-dom'
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
            <Index career={careers}/>
            <EditSelect 
                 title={job.title} 
                 location={job.location} 
                 company={job.company} 
                 description={job.description} 
                 salary={job.salary}
                 updateCareer={props.updateCareer}
                 career={props.career}
                 job={job}
            />
        </div>
    )
}

export default Edit
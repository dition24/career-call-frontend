import Nav from '../components/Nav'
import JobsIndex from '../components/JobsIndex'
import JobsSelect from '../components/JobsSelect'
import { useParams } from 'react-router-dom'

function Apply(props) {

    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null

    return (
        <div>
            <Nav setCareer={props.setCareer} back='/jobs'/>
            <JobsIndex career={props.career}/>
            <JobsSelect 
                title={job.title} 
                location={job.location} 
                company={job.company} 
                description={job.description} 
                salary={job.salary}
                deleteCareer={props.deleteCareer}
                career={props.career}
                job={job}
            />
        </div>
    )
}

export default Apply
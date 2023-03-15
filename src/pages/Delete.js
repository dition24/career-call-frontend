// edit/Delete page for employers
import { useParams, Link,} from 'react-router-dom'
import Nav from '../components/Nav'
import Index from '../components/Index'
import DeleteSelect from '../components/DeleteSelect'

function Delete(props) {
    
    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null

    return (
        <div>
            <Link to='/hires'>
                <button>Back</button>
            </Link>
            <Nav />
            <Index career={props.career}/>
            <DeleteSelect 
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

export default Delete
// edit/Delete page for employers
import { useParams } from 'react-router-dom'
import Index from '../components/Index'
import DeleteSelect from '../components/DeleteSelect'
import Nav from '../components/Nav'

function Delete(props) {
    
    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null
    

    return (
            <div>
                <Nav setCareer={props.setCareer} back='/hires'/>
                <Index career={props.career} />
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
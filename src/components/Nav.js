import { useState } from 'react'
import Back from '../components/Back'
function Nav(props) {

const [jobState, setJobState] = useState({
    jobTitle: "", 
    // WIP:
})
// const [job, setJob] = useState(null)
const jobData = (jobTitle) => {
    const URL = 'https://career-call-backend.herokuapp.com/hires/search?jobTitle=' + jobTitle
    fetch(URL)
    .then(response => response.json())            
    .then(data => props.setCareer(data))
}
const handleChange = (event) => {
    setJobState({
        jobTitle: event.target.value
        // WIP:
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
    jobData(jobState.jobTitle)
    console.log(`Searching for jobs with title: ${jobState.jobTitle}`)
    setJobState('')
    // WIP:
}

    return (
        
        <nav className="nav">
            <Back back={props.back}/>
            <form onSubmit={handleSubmit}>
                <input 
                    className='search'
                    type="text"
                    value={jobState.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                />
                <input 
                    className='submit'
                    type="submit" 
                    value="Search" 
                />
            </form>
        </nav>
    )
}

export default Nav
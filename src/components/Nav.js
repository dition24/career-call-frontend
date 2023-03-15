import { useState } from 'react'
// import Hire from '../pages/Hire'
function Nav(props) {

const [jobState, setJobState] = useState({
    jobTitle: "", 
    // WIP:
})
// const [job, setJob] = useState(null)
const jobData = (jobTitle) => {
    const URL = 'http://localhost:3001/hires/search?jobTitle=' + jobTitle
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
    // WIP:
}

    return (
        <nav className="nav">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={jobState.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                />
                <input 
                type="submit" 
                value="Search" 
                />
            </form>
        </nav>
    )
}

export default Nav
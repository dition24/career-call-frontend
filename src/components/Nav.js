
import { useState } from 'react'

function Nav(props) {

const [jobState, setJobState] = useState({
    jobTitle: "", 
    // WIP:
})

const handleChange = (event) => {
    setJobState({
        jobTitle: event.target.value
        // WIP:
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
    // WIP:
}

    return (
        <nav className="nav">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={jobState.jobTitle}
                    onChange={handleChange}
                />
                <input 
                type="submit" 
                value="Search" 
                placeholder="Search"
                />
            </form>
        </nav>
    )
}

export default Nav
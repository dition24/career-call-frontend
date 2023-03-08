import { Link } from 'react-router-dom'
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
            <Link to='/hires/new'>
                <button>Add New Job</button>
            </Link>
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
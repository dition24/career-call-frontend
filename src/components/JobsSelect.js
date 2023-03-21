//right details

function JobsSelect(props) {

    
    return (
        <div className='jobContain'>
            <div className='jobSelect'>
                <h2 className="jobh2">Career: {props.title}</h2>
                <h2 className="jobh2">Location: {props.location}</h2>
                <h2 className="jobh2">Company: {props.company}</h2>
                <p>{props.description}</p>
                <h3>Yearly Salary: ${props.salary}</h3>
                <button className='submit'>APPLY</button>
            </div>
        </div>
    )
}

export default JobsSelect
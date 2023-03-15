// edit/Delete page for employers
// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Index from '../components/Index'
import DeleteSelect from '../components/DeleteSelect'

function Delete(props) {
    
    const { id } = useParams()
    const careers = props.career
    const job = careers ? careers.find((c) => c._id === id) : null
    const loaded = () => {
        return (
            <>
                <h2>{careers.company}</h2>
                <h2>{careers.location}</h2>
                <h2>{careers.title}</h2>
                <p>{careers.description}</p>
                <h4>{careers.salary}</h4>
            </>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <Nav />
            <Index career={props.career}/>
            <DeleteSelect  /> 
            { job ? loading() : loaded()}
            {/* pass props to DeleteSelect */}
        </div>
    )
}

export default Delete
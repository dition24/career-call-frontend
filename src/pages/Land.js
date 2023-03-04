//this is the landing page (employer or employee choice)
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

function Land(props) {
    return (
        <>
            <nav>Welcome to Career Call</nav>
            <h1 className='landing'>Are You An Employer Or An Employee?</h1>
            <div className='landContainer'>
                <Link to='/jobs'>
                    <button className='Employee'>Employee</button>
                </Link>
                <Link to='/hires'>
                    <button className='Employer'>Employer</button>
                </Link>
            </div>
        </>            
    )
}

export default Land
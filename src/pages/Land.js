//this is the landing page (employer or employee choice)
import { Link } from 'react-router-dom'

function Land(props) {
    return (
        <>
            <nav>Welcome to Career Call</nav>
            <h1 className='landing'>Are You An Employer Or An Employee?</h1>
            <div className='landContainer'>
                <Link to='/jobs'>
                    <div className='Employee'>Employee</div>
                </Link>
                <Link to='/hires'>
                    <div className='Employer'>Employer</div>
                </Link>
            </div>
        </>            
    )
}

export default Land
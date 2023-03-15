// Employer hiring page
import { Link } from 'react-router-dom'
import Index from '../components/Index'
import HiresSelect from '../components/HiresSelect'
import Nav from '../components/Nav'

function Hire(props) {
    return (
        <div className='container'>
            <div>
                <Link to='/'>
                    <button className='back'>Back</button>
                </Link>
                <Nav setCareer={props.setCareer} />
                <Index career={props.career} />
                <HiresSelect career={props.career} createCareer={props.createCareer} />
            </div>
        </div>    
    );
}

export default Hire
// edit page for employers
import { Link } from 'react-router-dom'
import Index from '../components/Index'
import EditSelect from '../components/EditSelect'

function Edit(props) {
    return (
        <div className='edit'>
            <Link to='/hires'>
                <button className='back'>Back</button>
            </Link>
            <Index />
            <EditSelect />
            {/* pass props to editSelect */}
        </div>
    )
}

export default Edit
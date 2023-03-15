// edit page for employers
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Index from '../components/Index'
import EditSelect from '../components/EditSelect'

function Edit(props) {
    return (
        <div>
            <Link to='/hires'>
                <button>Back</button>
            </Link>
            <Nav />
            <Index />
            <EditSelect />
            {/* pass props to editSelect */}
        </div>
    )
}

export default Edit
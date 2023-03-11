// edit page for employers

import Nav from '../components/Nav'
import Index from '../components/Index'
import EditSelect from '../components/EditSelect'

function Edit(props) {
    return (
        <div>
            <Nav />
            <Index />
            <EditSelect />
            {/* pass props to editSelect */}
        </div>
    )
}

export default Edit
// edit/Delete page for employers

import Nav from '../components/Nav'
import Index from '../components/Index'
import DeleteSelect from '../components/DeleteSelect'

function Delete(props) {
    return (
        <div>
            <Nav />
            <Index />
            {/* <DeleteSelect title= location= description= company= />  */}
            {/* pass props to DeleteSelect */}
        </div>
    )
}

export default Delete
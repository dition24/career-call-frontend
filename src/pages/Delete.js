// edit/Delete page for employers
import { useState } from 'react'
import Nav from '../components/Nav'
import Index from '../components/Index'
import DeleteSelect from '../components/DeleteSelect'

function Delete(props) {
   
    const [career, setCareer] = useState(null)
    
    const URL = 'http://localhost:3001/hires'

    const getCareer = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setCareer(data)
        } catch (error) {
            console.log('error performing task')
        }
    }

    return (
        <div>
            <Nav />
            <Index />
            <DeleteSelect title='who' location='where' description='what' company='apple' /> 
            {/* pass props to DeleteSelect */}
        </div>
    )
}

export default Delete
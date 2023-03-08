// Employer hiring page
import { useState, useEffect } from 'react'
import Index from '../components/Index'
import Select from '../components/Select'
import Nav from '../components/Nav'


function Hire(props) {

    const job = {
        title: 'developer',
        location: 'florida',
        company: 'apple',
        description: 'tech stuff',
        salary: 100000
    }

    const [career, setCareer] = useState(job)

    const URL = 'http://localhost:3000/hires/'

    const getCareer = async () => {
        try {
            const response = await fetch(job)
            const data = await response.json()
            setCareer(data)
        } catch (error) {
            console.log('error performing task')
        }
    }

    const createCareer = async () => {
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(career),
            })
            getCareer()
        } catch (error) {
            console.log('error performing task')
        }
    }

    useEffect(() => {
        getCareer()
    }, [])

    return (
        <div>
            <Nav />
            <Index  />
            <Select />
        </div>

    )
}

export default Hire
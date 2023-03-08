// Employer hiring page
import Index from '../components/Index'
import Select from '../components/Select'
import Nav from '../components/Nav'

function Hire(props) {

    const career = {
        title: 'developer',
        location: 'florida',
        company: 'apple',
        description: 'tech stuff',
        salary: 100000
    }

    return (
        <div>
            <Nav />
            <Index title={career.title} location={career.location} company={career.company} />
            <Select />
        </div>

    )
}

export default Hire
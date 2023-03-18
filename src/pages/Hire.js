// Employer hiring page
import Index from '../components/Index'
import HiresSelect from '../components/HiresSelect'
import Nav from '../components/Nav'

function Hire(props) {
    return (
            <div>
                <Nav setCareer={props.setCareer} back='/'/>
                <Index career={props.career} />
                <HiresSelect career={props.career} createCareer={props.createCareer} />
            </div>  
    );
}

export default Hire
// Employer hiring page
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Index from '../components/Index'
import HiresSelect from '../components/HiresSelect'
import Nav from '../components/Nav'

function Hire(props) {

    

    return (
        <div>
            <Nav />
            <Index career={props.career} />
            <HiresSelect career={props.career} createCareer={props.createCareer}/>
        </div>
    );
}

export default Hire
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Land from './pages/Land'
import Hire from './pages/Hire'
import Job from './pages/Job'
import Edit from './pages/Edit'
import Delete from './pages/Delete'



function App() {
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

    const createCareer = async (newCareer) => {
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(newCareer),
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
    <div className="App">
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/hires' element={<Hire career={career} createCareer={createCareer} />}/>
        <Route path='/edit' element={<Edit />} />
        <Route path='/hires/:id' element={<Delete career={career}/>}/>
        <Route path='/jobs' element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Land from './pages/Land'
import Hire from './pages/Hire'
import Job from './pages/Job'
import Edit from './pages/Edit'
import Delete from './pages/Delete'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/hires' element={<Hire />}/>
        <Route path='/edit' element={<Edit />} />
        <Route path='/delete' element={<Delete />}/>
        <Route path='/jobs' element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
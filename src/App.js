import './App.css';
import { Routes, Route } from 'react-router-dom'
import Land from './pages/Land'
import Hire from './pages/Hire'
import Job from './pages/Job'
import Post from './pages/Post'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/hires' element={<Hire />}/>
        <Route path='/jobs' element={<Job />} />
        <Route path='/hires/new' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
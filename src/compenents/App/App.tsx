import { Route, Routes } from 'react-router-dom'
import CheckMoodPage from '../CheckMoodPage'
import HomePage from '../HomePage'
import LandingPage from '../LandingPage'
import LogIn from '../LogIn'
import SignUp from '../SignUp/SignUp'

function App () {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/check-mood' element={<CheckMoodPage />} />
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import LandingPage from '../LandingPage'
import SignUp from '../SignUp/SignUp'

function App () {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App

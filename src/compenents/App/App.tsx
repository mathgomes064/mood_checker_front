import { Route, Routes } from 'react-router-dom'
import CheckMoodPage from '../CheckMoodPage'
import HomePage from '../HomePage'

function App () {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/check-mood' element={<CheckMoodPage />} />
    </Routes>
  )
}

export default App

import { BrowserRouter as Router } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import './App.css'

function App() {
  
  const isAdmin = false

  return (
    <>
      <Router>
        {isAdmin ? <AdminPage /> : <UserPage />}
      </Router>
    </>
  )
}

export default App

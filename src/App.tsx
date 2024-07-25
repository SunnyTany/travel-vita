import { BrowserRouter as Router } from 'react-router-dom'
// import Header from './components/common/Header'
// import Main from './components/common/Main'
// import Footer from './components/common/Footer'
import AdminPage from './components/pages/AdminPage'
import UserPage from './components/pages/UserPage'
import './App.css'

function App() {
  
  const isAdmin = false

  return (
    <>
      <Router>
        {isAdmin ? <AdminPage /> : <UserPage />}
        {/* <Header/>
        <Main/>
        <Footer/> */}
      </Router>
    </>
  )
}

export default App

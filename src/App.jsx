import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import RelatoPage from './pages/RelatoPage.jsx'
import PaineisPage from './pages/PaineisPage'
import SobrePage from './pages/SobrePage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/relato" element={<RelatoPage />} />
      <Route path="/paineis" element={<PaineisPage />} />
      <Route path="/sobre" element={<SobrePage />} />
    </Routes>
    </>
  )
}

export default App

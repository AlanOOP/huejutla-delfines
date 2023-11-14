import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Header  from './components/Layout'
import Intro from './components/Intro'
import AvisosPrivacidad from './pages/AvisosPrivacidad';
import AcercaDe from './pages/AcercaDe';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Intro />} />
          <Route path="/aviso-privacidad" element={<AvisosPrivacidad />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Route>
      </Routes>
    </Router>
    )
}

export default App

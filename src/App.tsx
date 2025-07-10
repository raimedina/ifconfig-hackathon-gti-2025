import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Licitacao from './pages/home/LicitacaoPage'
import Detalhes from './pages/details/DetalhesPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashboard/DashboardPage'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Licitacao />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

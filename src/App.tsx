import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Licitacao from './pages/home/LicitacaoPage'
import { DetalhesPage } from './pages/details/DetalhesPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashboard/DashboardPage'
import Body from './components/body/Body'

function App() {

  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Licitacao />} />
          <Route path="/detalhes/:numero" element={<DetalhesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Body>
      <Footer />
    </Router>
  )
}

export default App

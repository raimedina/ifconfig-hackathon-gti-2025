import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Licitacao from './pages/home/LicitacaoPage'
import { DetailsPage } from './pages/details/DetailsPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
<<<<<<< HEAD
import Dashboard from './pages/dashboard/DashboardPage'
import Body from './components/body/Body'
=======
import BIPage from './pages/BI/BIPage'
import IAPage from './pages/IAPage/IAPage'
import Body from './components/body/Body'
import Menu from './components/menu/Menu'
>>>>>>> a0a95227d5e77dbd7fd1fab6da1797dac7f5afe6

function App() {

  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <Body>
        <Routes>
          <Route path="/" element={<Licitacao />} />
          <Route path="/detalhes/:numero" element={<DetalhesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
=======
      {/* <Menu /> */}
      <Body>
        <Routes>
        <Route path="/" element={<Licitacao />} />
        <Route path="/details/:number" element={<DetailsPage />} />
        <Route path="/bipage" element={<BIPage/>} />
        <Route path="/iapage" element={<IAPage/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
>>>>>>> a0a95227d5e77dbd7fd1fab6da1797dac7f5afe6
      </Body>
      <Footer />
    </Router>
  )
}

export default App

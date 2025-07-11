import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import { DetailsPage } from './pages/details/DetailsPage'
import Licitacao from './pages/home/LicitacaoPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import BIPage from './pages/BI/BIPage'
import IAPage from './pages/IAPage/IAPage'

function App() {

  return (
    <Router>
      <Header />
      {/* <Menu /> */}
      <Body>
        <Routes>
        <Route path="/" element={<Licitacao />} />
        <Route path="/details/:number" element={<DetailsPage />} />
        <Route path="/bipage" element={<BIPage/>} />
        <Route path="/iapage" element={<IAPage/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Body>
      <Footer />
    </Router>
  )
}

export default App
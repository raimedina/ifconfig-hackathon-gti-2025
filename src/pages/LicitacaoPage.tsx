
import Header from "../components/header/Header"
import Form from "../components/form/Form"
import CardList from "../components/card/CardList"
import Pagination from "../components/pagination/Pagination"
import Footer from "../components/footer/Footer"
import { FaSave } from "react-icons/fa"
import "./LicitacaoPage.css" // <- Importação do CSS

function Licitacao() {


  return (
    <>
      <Header></Header>
      <div className="title-container">
        <span className="title-text">Compras - Licitações</span>
        <FaSave className="title-icon" />
      </div>

      <Form></Form>
      <CardList></CardList>
      <Pagination totalPages={10} onPageChange={(page) => console.log(`Page changed to: ${page}`)}></Pagination>

      <Footer></Footer>    </>
  )
}

export default Licitacao

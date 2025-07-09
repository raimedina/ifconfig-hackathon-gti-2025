import Form from "../../components/form/Form"
import CardList from "../../components/card/CardList"
import Pagination from "../../components/pagination/Pagination"
import Title from "../../components/title/Title"

function Licitacao() {

  return (
    <>
      <Title />
      <Form />
      <CardList />
      <Pagination totalPages={10} onPageChange={(page) => console.log(`Page changed to: ${page}`)}></Pagination>
    </>
  )
}

export default Licitacao
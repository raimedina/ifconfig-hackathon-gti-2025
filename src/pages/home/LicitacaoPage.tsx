import { useState } from "react";
import Form from "../../components/form/Form";
import CardList from "../../components/card/CardList";
import Title from "../../components/title/Title";
import dados from "../../../BE/dados.json"; // ajuste o caminho conforme seu projeto

function Licitacao() {
  const [registrosFiltrados, setRegistrosFiltrados] = useState(dados.registros); // começa com tudo
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFiltrados = (novosRegistros: typeof dados.registros) => {
    setRegistrosFiltrados(novosRegistros);
    setCurrentPage(1); // volta pra página 1 ao filtrar
  };

  return (
    <>
      <Title text="Compras - Licitações" />
      <Form onFiltrar={handleFiltrados} />
      <CardList
        registros={registrosFiltrados}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Licitacao;
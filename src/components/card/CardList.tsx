import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import './CardList.css';

interface Registro {
  registro: {
    licitacao: {
      numero: string;
      modalidade: string;
      aberturaData: string;
      objetoResumido: string;
    };
    unidadeGestora: {
      denominacao: string;
    };
  };
}

interface CardListProps {
  registros: Registro[];           // dados já filtrados ou todos
  currentPage: number;             // página atual
  onPageChange: (page: number) => void; // função que muda a página
}

const itemsPerPage = 5;

const CardList: React.FC<CardListProps> = ({ registros, currentPage, onPageChange }) => {
  const [pageData, setPageData] = useState<Registro[]>([]);

  const totalPages = Math.ceil(registros.length / itemsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPageData(registros.slice(start, end));
  }, [currentPage, registros]);

  return (
    <div className="card-list">
      {pageData.length > 0 ? (
        pageData.map((item) => (
          <div key={item.registro.licitacao.numero} className="card">
            <h3>{item.registro.licitacao.numero} - {item.registro.licitacao.modalidade}</h3>
            <p><strong>Unidade Gestora:</strong> {item.registro.unidadeGestora.denominacao}</p>
            <p><strong>Abertura:</strong> {item.registro.licitacao.aberturaData}</p>
            <p><strong>Objeto:</strong> {item.registro.licitacao.objetoResumido}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma licitação encontrada.</p>
      )}

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default CardList;
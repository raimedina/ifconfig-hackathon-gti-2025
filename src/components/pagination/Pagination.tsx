import React, { useState } from 'react';

// Definir a interface para o componente de paginação
interface PaginationProps {
  totalPages: number; // Número total de páginas
  onPageChange: (page: number) => void; // Função de callback para quando a página mudar
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  // Estado para a página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Função para ir para a página anterior
  const previousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  // Função para ir para a próxima página
  const nextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={previousPage}// Desabilita o botão anterior se já estiver na primeira página
      >
        Anterior
      </button>
      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={nextPage}
        disabled={currentPage === totalPages} 
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;

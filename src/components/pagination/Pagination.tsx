import { useState } from 'react';
import './Pagination.css';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

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
        className="pagination-button anterior"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <span className="pagination-number">{currentPage}</span>

      <button
        className="pagination-button proxima"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;

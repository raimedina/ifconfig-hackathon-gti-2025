import React from 'react';

// Interface para os dados de cada card
interface Card {
  numero: string;
  modalidade: string;
  unidadeGestora: string;
  dataAbertura: string;
  situacao: string;
  tituloObjeto: string;
}

// Dados simulados de exemplo (pode ser substituído por dados dinâmicos)
const cardsData: Card[] = [
  {
    numero: '12345',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Secretaria da Saúde',
    dataAbertura: '2025-05-15',
    situacao: 'Homologado',
    tituloObjeto: 'Compra de equipamentos médicos',
  },
  {
    numero: '12346',
    modalidade: 'Tomada de Preços',
    unidadeGestora: 'Secretaria da Educação',
    dataAbertura: '2025-06-01',
    situacao: 'Em Andamento',
    tituloObjeto: 'Aquisição de livros didáticos',
  },
  {
    numero: '12347',
    modalidade: 'Concorrência',
    unidadeGestora: 'Prefeitura Municipal',
    dataAbertura: '2025-07-10',
    situacao: 'Suspensa',
    tituloObjeto: 'Construção de nova escola municipal',
  },
];

const CardList: React.FC = () => {
  return (
    <div className="card-list">
      {/* Cabeçalho com os títulos */}
      <div className="card-list-header">
        <div className="header-item">Número</div>
        <div className="header-item">Modalidade</div>
        <div className="header-item">Unidade Gestora Participante</div>
        <div className="header-item">Data de Abertura</div>
        <div className="header-item">Situação</div>
      </div>

      {/* Lista de Cards */}
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-item">{card.numero}</div>
          <div className="card-item">{card.modalidade}</div>
          <div className="card-item">{card.unidadeGestora}</div>
          <div className="card-item">{card.dataAbertura}</div>
          <div className="card-item">{card.situacao}</div>
          <div className="card-item">{card.tituloObjeto}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;

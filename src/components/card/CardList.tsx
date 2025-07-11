import './CardList.css';
import { Link } from "react-router-dom";
import cardsData from '../../data/card/cardsData';

function CardList(){
  return (
    <div className="card-list">
      <div className="card-list-header">
        <div>Número</div>
        <div>Modalidade</div>
        <div>Unidade Gestora Participante</div>
        <div>Data de Abertura</div>
        <div>Situação</div>
      </div>

      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icons">
            {card.link && (
              <Link to={`/detalhes/${encodeURIComponent(card.numero)}`} title="Ver detalhes">
              🔗
            </Link>
            )}
          </div>

          <div className="card-item">
            <div className="card-item-label">Número</div>
            <div className="card-item-value">{card.numero}</div>
          </div>
          <div className="card-item">
            <div className="card-item-label">Modalidade</div>
            <div className="card-item-value">{card.modalidade}</div>
          </div>
          <div className="card-item">
            <div className="card-item-label">Unidade gestora participante</div>
            <div className="card-item-value">{card.unidadeGestora}</div>
          </div>
          <div className="card-item">
            <div className="card-item-label">Data de abertura</div>
            <div className="card-item-value">{card.dataAbertura}</div>
          </div>
          <div className="card-item">
            <div className="card-item-label">Situação</div>
            <div className="card-item-value">{card.situacao}</div>
          </div>
          <div className="card-objeto">{card.tituloObjeto}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
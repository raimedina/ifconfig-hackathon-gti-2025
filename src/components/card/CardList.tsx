import './CardList.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Card {
  numero: string
  modalidade: string
  unidadeGestora: string
  dataAbertura: string
  situacao: string
  tituloObjeto: string
  link?: string
}

const CardList: React.FC = () => {
  const [cardsData, setCardsData] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/api/licitacoes')
      .then((res) => res.json())
      .then((data) => {
        const cards = data.registros.map((item: any) => {
          const lic = item.registro.licitacao
          return {
            numero: lic.numero,
            modalidade: lic.modalidade,
            unidadeGestora: item.registro.unidadeGestora?.denominacao || 'Não informado',
            dataAbertura: lic.aberturaData,
            situacao: lic.formaJulgamento, // ou outro campo desejado
            tituloObjeto: lic.objetoResumido,
            link: item.registro.listTextos?.[0]?.link // ou undefined
          }
        })
        setCardsData(cards)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao carregar licitações:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Carregando licitações...</div>

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
              <Link to={`/details/${encodeURIComponent(card.numero)}`} title="Ver detalhes">
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
  )
}

export default CardList
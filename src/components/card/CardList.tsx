import './CardList.css';
import { Link } from "react-router-dom";

interface Card {
  numero: string;
  modalidade: string;
  unidadeGestora: string;
  dataAbertura: string;
  situacao: string;
  tituloObjeto: string;
  link?: string;
}

const cardsData: Card[] = [
  {
    numero: 'PE295/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Fundo Municipal de Assistência Social',
    dataAbertura: '12/11/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Contratação de empresas especializadas na prestação de serviços de vigilância eletrônica, incluindo vídeo-monitoramento, sistemas de alarme com transmissão de dados via conectividade dual (Wi-Fi + ...',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',},
  {
    numero: 'PE162/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '22/07/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Contratação de empresa para o fornecimento de gêneros alimentícios mais perecíveis - frutas e hortaliças.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE207/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Fundo Municipal de Saúde',
    dataAbertura: '16/09/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de preços para aquisição de curativos para atendimento das necessidades da rede da Secretaria Municipal de Saúde',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'CC90252/2024',
    modalidade: 'Concorrência',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '04/12/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Contratação de empresa para Elaboração dos Projetos Executivos Complementares de Engenharia da Praça Tancredo Neves (Praça dos 3 Poderes) Centro, Florianópolis/SC',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'CC 90035/2025',
    modalidade: 'Concorrência',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '27/03/2025',
    situacao: 'Suspenso',
    tituloObjeto: 'Concessão da exploração de serviços funerários no município de Florianópolis/SC.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE 266/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '31/10/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preços para contratação de empresa para fornecimento de livros de literatura para atender a Rede Municipal de Ensino de Florianópolis.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE309/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Fundação Municipal do Meio Ambiente',
    dataAbertura: '14/11/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preço para contratação de empresa especializada na prestação de serviço de manutenção em trilhas diversas do município de Florianópolis e derevitalização/manutenção da Praça Esteves Jun...',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE233/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '20/03/2025',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preço para fornecimento de Equipamentos de Proteção Individual (EPI), Resgate e Salvamento.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'LE311/2024',
    modalidade: 'Leilão',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '26/11/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Permissão onerosa de uso de espaço público para exploração de venda de alimentos e bebidas em pontos determinados nas praias de Florianópolis, cuja validade será até 30/04/2025.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'IL406/2024',
    modalidade: 'Inexigibilidade',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '',
    situacao: 'Revogado',
    tituloObjeto: 'Locação de imóvel para a Central de Atendimento ao Turista - CAT, no Floripa Airport',
  },
  {
    numero: 'PE 266/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '31/10/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preços para contratação de empresa para fornecimento de livros de literatura para atender a Rede Municipal de Ensino de Florianópolis.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE309/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Fundação Municipal do Meio Ambiente',
    dataAbertura: '14/11/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preço para contratação de empresa especializada na prestação de serviço de manutenção em trilhas diversas do município de Florianópolis e derevitalização/manutenção da Praça Esteves Jun...',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'PE233/2024',
    modalidade: 'Pregão Eletrônico',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '20/03/2025',
    situacao: 'Suspenso',
    tituloObjeto: 'Registro de Preço para fornecimento de Equipamentos de Proteção Individual (EPI), Resgate e Salvamento.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'LE311/2024',
    modalidade: 'Leilão',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '26/11/2024',
    situacao: 'Suspenso',
    tituloObjeto: 'Permissão onerosa de uso de espaço público para exploração de venda de alimentos e bebidas em pontos determinados nas praias de Florianópolis, cuja validade será até 30/04/2025.',
    link: 'https://www.pmf.sc.gov.br/licitacoes/index.php?licitacao=PE295/2024',
  },
  {
    numero: 'IL406/2024',
    modalidade: 'Inexigibilidade',
    unidadeGestora: 'Prefeitura Municipal de Florianópolis',
    dataAbertura: '',
    situacao: 'Revogado',
    tituloObjeto: 'Locação de imóvel para a Central de Atendimento ao Turista - CAT, no Floripa Airport',
  },
];

const CardList: React.FC = () => {
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
  );
};

export default CardList;

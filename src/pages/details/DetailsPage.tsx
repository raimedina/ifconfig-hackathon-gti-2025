import { FaDownload, FaChevronRight } from "react-icons/fa";
import "./DetailsPage.css";

export const DetailsPage = () => {
  const { numero } = useParams();

  return (
    <div className="detalhes-container">
      <div className="breadcrumb">Compras - Licitações {'>'} <span>Dados da licitação</span></div>

      <h2 className="titulo-pagina">Dados da licitação</h2>
      <h3 className="titulo-edital">Edital de Pregão Eletrônico PE {numero}</h3>

      <div className="bloco">
        <p><strong>Unidade(s) gestora(s) participante(s):</strong></p>
        <p>Fundo Municipal de Saúde</p>
        <p><strong>Valor Total:</strong> R$ 1.894.133,60</p>

        <div className="objeto">
          <strong>Objeto:</strong>
          <p>Registro de preços para compra de equipamento de proteção individual EPI.</p>
        </div>

        <p><strong>Data de emissão:</strong> 16/04/2025</p>
        <p><strong>Finalidade:</strong> <span className="destaque">Aquisição de Bens</span></p>
        <p><strong>Tipo:</strong> <span className="destaque">Menor preço</span></p>
        <p><strong>Forma de julgamento:</strong> <span className="destaque">Por item</span></p>
        <p><strong>Forma de realização:</strong> Eletrônico</p>
        <p><strong>Registro de preço:</strong> Sim</p>
        <p><strong>Responsável jurídico:</strong> 425.***.***-63 - LAÍSE DA ROSA MELO PAVÃO</p>
        <p><strong>Situação:</strong> Aberto</p>
      </div>

      <div className="bloco">
        <h4 className="subtitulo">Entrega dos envelopes <span className="linha"></span></h4>
        <p><strong>Prazo final:</strong> 21/07/2025 14:00</p>
        <p><strong>Local:</strong> Conforme minuta do edital.</p>

        <h4 className="subtitulo">Abertura dos envelopes <span className="linha"></span></h4>
        <p><strong>Data:</strong> 21/07/2025 14:01</p>
        <p><strong>Local:</strong> Conforme minuta do edital.</p>
      </div>

      <div className="bloco">
        <h4 className="subtitulo azul">Itens <span className="linha"></span></h4>
        {[{
          numero: 1,
          nome: "CAMPO FENESTRADO DESCARTÁVEL",
          quantidade: "1.400.000,00000",
          unidade: "unidade",
          valor: "3,79"
        }, {
          numero: 2,
          nome: "AVENTAL CIRÚRGICO DESCARTÁVEL 40G/M² TAMANHO GRANDE",
          quantidade: "82.000.000,00000",
          unidade: "unidade",
          valor: "4,01"
        }].map((item) => (
          <div key={item.numero} className="item-card">
            <p className="linha-dados"><strong>Número:</strong> <FaChevronRight className="icone-seta" /> {item.numero}</p>
            <p><strong>Denominação:</strong> {item.nome}</p>
            <p><strong>Quantidade:</strong> {item.quantidade}</p>
            <p><strong>Unid. medida:</strong> {item.unidade}</p>
            <p><strong>Vl. unit. estimado (R$):</strong> {item.valor}</p>
            <p><strong>Situação:</strong> -</p>
          </div>
        ))}
      </div>

      <div className="bloco">
        <h4 className="subtitulo azul">Textos <span className="linha"></span></h4>
        {["EDITAL", "TR", "ETP", "DFD", "ORÇAMENTO"].map((texto, idx) => (
          <div className="doc-card" key={idx}>
            <div>
              <p><strong>Texto:</strong> {texto}</p>
              <p><strong>Tipo:</strong> {getTipoDescricao(texto)}</p>
            </div>
            <FaDownload className="icone-download" title="Baixar documento" />
          </div>
        ))}
      </div>

      <div className="bloco">
        <h4 className="subtitulo azul">Publicações <span className="linha"></span></h4>
        <div className="item-card">
          <p><strong>Data:</strong> 05/05/2025</p>
          <p><strong>Veículo:</strong> DIÁRIO OFICIAL DOS MUNICÍPIOS</p>
          <p><strong>Tipo:</strong> Diário Oficial do Município</p>
        </div>
      </div>

      <p className="atualizado">Informações atualizadas em: 10/07/2025 às 01:10</p>
    </div>
  );
};

function getTipoDescricao(texto: string) {
  const mapa: Record<string, string> = {
    EDITAL: "Edital",
    TR: "Termo de referência",
    ETP: "Estudo Técnico Preliminar (ETP)",
    DFD: "Documento de formalização de demanda",
    ORÇAMENTO: "Orçamento estimado",
  };
  return mapa[texto] || "Documento";
}
function useParams(): { numero: string | undefined } {
    const urlParams = new URLSearchParams(window.location.search);
    const numero = urlParams.get("numero") || undefined;
    return { numero };
}


import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Receita */}
        <div className="footer-column">
          <h4>Receita</h4>
          <ul>
            <li><a href="#">Receita detalhada</a></li>
            <li><a href="#">Transferências Financeiras Recebidas</a></li>
            <li><a href="#">Convênios Recebidos</a></li>
            <li><a href="#">Renúncia de Receita</a></li>
            <li><a href="#">COVID-19 - Receitas</a></li>
          </ul>
        </div>

        {/* Despesa */}
        <div className="footer-column">
          <h4>Despesa</h4>
          <ul>
            <li><a href="#">Gastos por Favorecido</a></li>
            <li><a href="#">Diárias</a></li>
            <li><a href="#">Gastos com Passagens</a></li>
            <li><a href="#">Empenhos</a></li>
            <li><a href="#">Pagamentos em Ordem Cronológica</a></li>
            <li><a href="#">Restos a Pagar</a></li>
            <li><a href="#">Transferências Financeiras Concedidas</a></li>
            <li><a href="#">Convênios Repassados</a></li>
            <li><a href="#">Despesa detalhada</a></li>
            <li><a href="#">COVID-19 - Despesas</a></li>
            <li><a href="#">Obras Públicas</a></li>
          </ul>
        </div>

        {/* Compras */}
        <div className="footer-column">
          <h4>Compras</h4>
          <ul>
            <li><a href="#">Processos Licitatórios</a></li>
            <li><a href="#">Contratos</a></li>
            <li><a href="#">Atas de Registro de Preços</a></li>
            <li><a href="#">COVID-19 - Processos de Aquisições/Serviços</a></li>
            <li><a href="#">COVID-19 - Contratos</a></li>
            <li><a href="#">Sanções Administrativas</a></li>
            <li><a href="#">Acordos Não Financeiros</a></li>
            <li><a href="#">Impedidos de Licitar</a></li>
            <li><a href="#">Publicações Legais</a></li>
            <li><a href="#">Lei de Responsabilidade Fiscal</a></li>
            <li><a href="#">Processo de Inexigibilidade de Chamamento Público</a></li>
          </ul>
        </div>

        {/* Gestão Pública */}
        <div className="footer-column">
          <h4>Gestão Pública</h4>
          <ul>
            <li><a href="#">Parcerias</a></li>
            <li><a href="#">Termos, Convênios e Repasses da União</a></li>
            <li><a href="#">Editais e Chamadas Públicas</a></li>
            <li><a href="#">Contas Públicas</a></li>
            <li><a href="#">COVID-19</a></li>
            <li><a href="#">Doações e Apreensões</a></li>
            <li><a href="#">Convênios e Contratos de Repasse - 2024</a></li>
            <li><a href="#">Convênios</a></li>
            <li><a href="#">Transferências Voluntárias</a></li>
            <li><a href="#">Conselhos Municipais</a></li>
            <li><a href="#">Organogramas</a></li>
          </ul>
        </div>

        {/* Transparência e Contato */}
        <div className="footer-column">
          <h4>Transparência</h4>
          <ul>
            <li><a href="#">Gestão de Pessoal</a></li>
            <li><a href="#">Quadro Funcional</a></li>
            <li><a href="#">Tabela de Vencimentos Básicos</a></li>
            <li><a href="#">Remuneração dos Servidores</a></li>
            <li><a href="#">Administração Direta e Indireta</a></li>
            <li><a href="#">Comcap</a></li>
            <li><a href="#">Dados Abertos</a></li>
            <li><a href="#">Glossário</a></li>
            <li><a href="#">Acessibilidade</a></li>
            <li><a href="#">Ouvidoria</a></li>
            <li><a href="#">Denúncias</a></li>
            <li><a href="#">Diário Oficial</a></li>
            <li><a href="#">Leis Municipais</a></li>
            <li><a href="#">Emendas Parlamentares</a></li>
            <li><a href="#">Consulta Nacional</a></li>
            <li><a href="#">Consulta Municipal</a></li>
            <li><a href="#">Acesso à Informação</a></li>
            <li><a href="#">e-SIC</a></li>
            <li><a href="#">Lei da Transparência</a></li>
          </ul>
          <h4>Endereço</h4>
          <address>
            Rua Conselheiro Mafra, 454/455<br />
            Florianópolis - SC<br />
            CEP: 88.010-102
          </address>
          <img src="/logo-prefeitura.png" alt="Prefeitura de Florianópolis" className="footer-logo" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;

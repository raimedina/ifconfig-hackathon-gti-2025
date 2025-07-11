import { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import './Form.css';
import dados from '../../../BE/dados.json';
import { formatDate, nextYear } from '../../utils/date/FormatDate'
import { modalidadeOptions, situacaoOptions, unidadeGestoraOptions } from '../../data/form/formData'

interface FormData {
  unidadeGestora: string;
  dataInicio: string;
  dataFim: string;
  modalidade: string;
  situacao: string;
  palavraChave: string;
}

interface FormProps {
  onFiltrar: (resultados: typeof dados.registros) => void;
}

const Form: React.FC<FormProps> = ({ onFiltrar }) => {
  const [formData, setFormData] = useState<FormData>({
    unidadeGestora: '',
    dataInicio: '2000-01-01', 
    dataFim: formatDate(nextYear),
    modalidade: '',
    situacao: '',
    palavraChave: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log('🔍 Dados do formulário:', formData);
  
    const resultadosFiltrados = dados.registros.filter((item, index) => {
      const lic = item.registro.licitacao;
      const gestor = item.registro.unidadeGestora?.denominacao?.toLowerCase() || '';
      const objeto = lic.objetoResumido?.toLowerCase() || '';
      const modalidade = lic.modalidade?.toLowerCase() || '';
      const dataAbertura = new Date(lic.aberturaData);
      const palavra = formData.palavraChave.toLowerCase();
  
      const filtroGestora =
        !formData.unidadeGestora ||
        gestor.includes(formData.unidadeGestora.toLowerCase());
      const filtroModalidade =
        !formData.modalidade ||
        modalidade === formData.modalidade.toLowerCase();
      const filtroSituacao =
        !formData.situacao ||
        item.registro.listItens?.some((i) =>
          i.situacao?.toLowerCase().includes(formData.situacao.toLowerCase())
        );
      const filtroPalavra =
        !formData.palavraChave || objeto.includes(palavra);
      const filtroDataInicio =
        !formData.dataInicio || dataAbertura >= new Date(formData.dataInicio);
      const filtroDataFim =
        !formData.dataFim || dataAbertura <= new Date(formData.dataFim);
  
      console.log(`📦 Item ${index + 1}:`);
      console.log('  ➤ Unidade Gestora:', gestor, ' | filtro:', filtroGestora);
      console.log('  ➤ Modalidade:', modalidade, ' | filtro:', filtroModalidade);
      console.log('  ➤ Situação:', item.registro.listItens?.map(i => i.situacao), ' | filtro:', filtroSituacao);
      console.log('  ➤ Palavra-chave:', objeto, ' | filtro:', filtroPalavra);
      console.log('  ➤ Abertura:', lic.aberturaData, ' | Início OK?', filtroDataInicio, ' | Fim OK?', filtroDataFim);
  
      return (
        filtroGestora &&
        filtroModalidade &&
        filtroSituacao &&
        filtroPalavra &&
        filtroDataInicio &&
        filtroDataFim
      );
    });
  
    console.log('✅ Resultados filtrados:', resultadosFiltrados.length);
    onFiltrar(resultadosFiltrados);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="unidadeGestora">Unidade gestora</label>
          <div className="select-wrapper">
            <select
              id="unidadeGestora"
              name="unidadeGestora"
              value={formData.unidadeGestora}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              {unidadeGestoraOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FaAngleDown className="select-icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dataInicio">Data Inicial</label>
          <input
            type="date"
            name="dataInicio"
            id="dataInicio"
            value={formData.dataInicio}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataFim">Data Final</label>
          <input
            type="date"
            name="dataFim"
            id="dataFim"
            value={formData.dataFim}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="modalidade">Modalidade</label>
          <div className="select-wrapper">
            <select
              id="modalidade"
              name="modalidade"
              value={formData.modalidade}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              {modalidadeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FaAngleDown className="select-icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="situacao">Situação</label>
          <div className="select-wrapper">
            <select
              id="situacao"
              name="situacao"
              value={formData.situacao}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              {situacaoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FaAngleDown className="select-icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="palavraChave">Palavra-chave</label>
          <input
            type="text"
            id="palavraChave"
            name="palavraChave"
            value={formData.palavraChave}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="consultar-btn">
          <FaAngleRight className="icon" />
          Consultar
        </button>
      </form>
    </div>
  );
};

export default Form;
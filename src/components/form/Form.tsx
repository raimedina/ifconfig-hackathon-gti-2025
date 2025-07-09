import { useState } from 'react';
import './Form.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';


interface FormData {
  unidadeGestora: string;
  dataInicio: string;
  dataFim: string;
  modalidade: string;
  situacao: string;
  palavraChave: string;
}

const unidadeGestoraOptions = ['IFSC', 'Prefeitura', 'Outros'];
const modalidadeOptions = ['Pregão', 'Concorrência', 'Dispensa'];
const situacaoOptions = ['Aberta', 'Encerrada', 'Em andamento'];

const today = new Date();
const nextYear = new Date();
nextYear.setFullYear(today.getFullYear() + 1);

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    unidadeGestora: '',
    dataInicio: formatDate(today),
    dataFim: formatDate(nextYear),
    modalidade: '',
    situacao: '',
    palavraChave: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePeriodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [inicio, fim] = e.target.value.split(' - ');
    setFormData(prev => ({
      ...prev,
      dataInicio: inicio.trim(),
      dataFim: fim?.trim() || '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="unidadeGestora">Unidade gestora</label>
        <div className="select-wrapper">
          <select
            id="unidadeGestora"
            name="unidadeGestora"
            value={formData.unidadeGestora}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione</option>
            {unidadeGestoraOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <FaAngleDown className="select-icon" />
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="periodo">Período</label>
        <input
          type="text"
          id="periodo"
          name="periodo"
          placeholder="dd/mm/aaaa - dd/mm/aaaa"
          value={
            formData.dataInicio && formData.dataFim
              ? `${formData.dataInicio} - ${formData.dataFim}`
              : ''
          }
          onChange={handlePeriodoChange}
          required
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
            required
          >
            <option value="">Selecione</option>
            {modalidadeOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
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
            required
          >
            <option value="">Selecione</option>
            {situacaoOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
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
          required
        />
      </div>

      <button type="submit" className="consultar-btn">
        <FaAngleRight className="icon" />
        Consultar
      </button>
    </form>
  );
};

export default Form;

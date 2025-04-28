import React, { useState } from 'react';

interface FormData {
  unidadeGestora: string;
  periodo: string;
  modalidade: string;
  situacao: string;
  palavraChave: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    unidadeGestora: '',
    periodo: '',
    modalidade: '',
    situacao: '',
    palavraChave: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para consultar os dados
    console.log('Formulário enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="unidadeGestora">Unidade Gestora</label>
        <input
          type="text"
          id="unidadeGestora"
          name="unidadeGestora"
          value={formData.unidadeGestora}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="periodo">Período</label>
        <input
          type="date"
          id="periodo"
          name="periodo"
          value={formData.periodo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="modalidade">Modalidade</label>
        <input
          type="text"
          id="modalidade"
          name="modalidade"
          value={formData.modalidade}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="situacao">Situação</label>
        <input
          type="text"
          id="situacao"
          name="situacao"
          value={formData.situacao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="palavraChave">Palavra-chave</label>
        <input
          type="text"
          id="palavraChave"
          name="palavraChave"
          value={formData.palavraChave}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="consultar-btn">Consultar</button>
    </form>
  );
};

export default Form;

import { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="logo-title">
        <a href="/">
          <div className="logo">
            <img src="/src/assets/brasaoFlorianopolis.png" alt="Brasão de Florianópolis" />
          </div>

          <div className="title">Prefeitura Municipal de Florianópolis</div>
        </a>
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>

     
    </header>
  );
};

export default Header;

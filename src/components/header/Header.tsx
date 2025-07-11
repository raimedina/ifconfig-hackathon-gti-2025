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
      
      <div className="menu-container">
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
        <ul>
            <li className="nav-item"><a href="/">Página Inicial</a></li>
            <li className="nav-item"><a href="/bipage">Dashboard BI</a></li>
            <li className="nav-item"><a href="iapage">Assistente Virtual</a></li>
        </ul>
      </nav>
    </div>

     
    </header>
  );
};

export default Header;

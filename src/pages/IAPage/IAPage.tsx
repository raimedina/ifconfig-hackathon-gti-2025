import Title from '../../components/title/Title'
import './IAPage.css'
import { FaRobot } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'

function IAPage() {
  return (
    <div className="chatbot-container">
      <Title text="Assistente Virtual" />
      
      <div className="sub-title">
        <h4>Converse com nosso assistente virtual e tire dúvidas sobre as licitações.</h4>
      </div>

      <div className="chat-box">
        <div className="message bot">
          <FaRobot className="icon" />
          <div className="bubble">Olá! Em que posso ajudar?</div>
        </div>

        <div className="message user">
          <div className="bubble">Quais são as licitações abertas?</div>
        </div>

        <div className="message bot">
          <FaRobot className="icon" />
          <div className="bubble">Essas são as licitações em aberto no momento: ...</div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Digite uma mensagem..." />
        <button>
          <IoMdSend />
        </button>
      </div>
    </div>
  )
}

export default IAPage;
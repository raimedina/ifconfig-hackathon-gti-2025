import { useState } from 'react'
import Title from '../../components/title/Title'
import './IAPage.css'
import { FaRobot } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'

function IAPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Em que posso ajudar?' }
  ])

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { sender: 'user', text: input }]
    setMessages(newMessages)
    setInput('')

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()

      const botMessage = { sender: 'bot', text: data.response }

      // Se vier "detalhes" no JSON, adiciona texto extra com info
      if (data.from === 'json' && data.detalhes) {
        const { numero, modalidade, objeto, advogado, unidadeGestora, link } = data.detalhes
        const detalhesTexto = `
         Nº: ${numero}
         Modalidade: ${modalidade}
         Objeto: ${objeto}
          Advogado: ${advogado}
          Unidade Gestora: ${unidadeGestora}
          Link: ${link}
        `.trim()
        setMessages([...newMessages, botMessage, { sender: 'bot', text: detalhesTexto }])
      } else {
        setMessages([...newMessages, botMessage])
      }

    } catch (err) {
      console.error('Erro:', err)
      setMessages([...newMessages, { sender: 'bot', text: 'Erro ao conectar com o assistente.' }])
    }
  }

  return (
    <div className="chatbot-container">
      <Title text="Assistente Virtual" />
      <div className="sub-title">
        <h4>Converse com nosso assistente virtual e tire dúvidas sobre as licitações.</h4>
      </div>

      <div className="chat-wrapper">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'bot' && <FaRobot className="icon" />}
              <div className="bubble">
                {msg.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <IoMdSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IAPage

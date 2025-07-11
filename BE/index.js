const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { OpenAI } = require('openai')
const licitacoesData = require('./dados.json')

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Função para buscar em todos os campos do JSON
function buscarNoJson(message) {
  const termo = message.toLowerCase()
  
  for (const registroBruto of licitacoesData.registros) {
    const registro = registroBruto.registro
    const lic = registro.licitacao
    const advogado = registro.advogado?.pessoa?.nome || ''
    const unidade = registro.unidadeGestora?.denominacao || ''
    const textos = registro.listTextos?.map(t => t.denominacao).join(' ') || ''

    const tudo = `${lic.numero} ${lic.modalidade} ${lic.objetoResumido} ${lic.finalidade} ${advogado} ${unidade} ${textos}`.toLowerCase()

    if (tudo.includes(termo)) {
      return {
        numero: lic.numero,
        modalidade: lic.modalidade,
        objeto: lic.objetoResumido,
        advogado,
        unidadeGestora: unidade,
        link: registro.listTextos?.[0]?.link || '',
        resposta: `Informações encontradas para a licitação ${lic.numero}: ${lic.objetoResumido}, sob responsabilidade de ${advogado}, na unidade ${unidade}.`
      }
    }
  }

  return null
}

// Endpoint principal do chat
app.post('/api/chat', async (req, res) => {
  const { message } = req.body

  const respostaJson = buscarNoJson(message)

  if (respostaJson) {
    return res.json({ response: respostaJson.resposta, from: 'json', detalhes: respostaJson })
  }

  // Fallback: usar OpenAI
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo'
    })

    return res.json({ response: completion.choices[0].message.content, from: 'openai' })
  } catch (error) {
    console.error('Erro com a OpenAI:', error)
    res.status(500).json({ error: 'Erro ao se comunicar com a OpenAI' })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

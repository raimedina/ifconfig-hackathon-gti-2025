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

// 🔎 Função para encontrar licitação por número
function encontrarLicitacao(numero) {
  const registros = licitacoesData.registros || []
  const resultado = registros
    .map(r => r.registro)
    .find(l => String(l.licitacao.numero) === String(numero))

  console.log('→ Resultado da busca por número:', resultado ? 'Encontrado ✅' : 'Não encontrado ❌')
  return resultado
}

// 🧠 Função para responder com base no JSON
function interpretarPergunta(pergunta, licitacao) {
  if (!licitacao) return null

  const lc = licitacao.licitacao
  const adv = licitacao.advogado?.pessoa?.nome
  const itens = licitacao.listItens || []
  const contratos = licitacao.listContratos || []

  const perguntaLower = pergunta.toLowerCase()

  if (perguntaLower.includes('advogado')) {
    return `O advogado responsável é ${adv || 'não informado'}.`
  }

  if (perguntaLower.includes('modalidade')) {
    return `A modalidade da licitação é ${lc.modalidade}.`
  }

  if (perguntaLower.includes('valor')) {
    return `O valor estimado é R$ ${parseFloat(lc.valorEstimado).toFixed(2)}.`
  }

  if (perguntaLower.includes('data')) {
    return `A emissão foi em ${lc.dataEmissao} e a abertura em ${lc.aberturaData}.`
  }

  if (perguntaLower.includes('objeto')) {
    return `Objeto da licitação: ${lc.objetoResumido}`
  }

  if (perguntaLower.includes('vencedor')) {
    const vencedores = itens.flatMap(item =>
      item.listVencedores.map(v => `${v.fornecedor} (Item: ${item.denominacao})`)
    )
    return vencedores.length
      ? `Empresas vencedoras: ${vencedores.join(', ')}.`
      : 'Nenhuma vencedora informada.'
  }

  if (perguntaLower.includes('contrato')) {
    if (contratos.length === 0) return 'Nenhum contrato encontrado.'
    const contrato = contratos[0]
    return `Contrato nº ${contrato.numero}, valor R$ ${contrato.valorTotal}, vigência de ${contrato.inicioVigencia} a ${contrato.vencimento}.`
  }

  return `Licitação nº ${lc.numero}, objeto: ${lc.objetoResumido}, valor estimado R$ ${lc.valorEstimado}, abertura em ${lc.aberturaData}.`
}

// 🧩 Rota principal de chat
app.post('/api/chat', async (req, res) => {
  const { message } = req.body
  console.log('→ Pergunta recebida:', message)

  try {
    const numeroMatch = message.match(/\d{8,9}/)
    const numero = numeroMatch ? numeroMatch[0] : null
    console.log('→ Número extraído:', numero)

    if (numero) {
      const licitacao = encontrarLicitacao(numero)

      if (licitacao) {
        const resposta = interpretarPergunta(message, licitacao)
        return res.json({
          response: resposta || 'Não consegui interpretar a pergunta com base na licitação.',
          fonte: 'json'
        })
      }
    }

    console.log('→ Enviando pergunta para OpenAI...')
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo'
    })

    const chatResponse = completion.choices[0].message.content
    return res.json({
      response: chatResponse,
      fonte: 'openai'
    })

  } catch (error) {
    console.error('❌ Erro no servidor:', error)
    res.status(500).json({ error: 'Erro no servidor.' })
  }
})

// 🔍 Rota para listar todas as licitações
app.get('/api/licitacoes', (req, res) => {
  res.json(licitacoesData)
})

// 🚀 Inicialização
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { OpenAI } = require('openai')

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

app.post('/api/chat', async (req, res) => {
  const { message } = req.body

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo'
    })

    res.json({ response: completion.choices[0].message.content })
  } catch (error) {
    console.error('Erro com a OpenAI:', error)
    res.status(500).json({ error: 'Erro ao se comunicar com a OpenAI' })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

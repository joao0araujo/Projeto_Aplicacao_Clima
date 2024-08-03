import express from 'express';

var cors = require('cors')

const app = express()

const PORT = 3000

app.use(express.json())

app.use(cors())

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
  })

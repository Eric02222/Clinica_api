const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    return res.json("Pega aqui 🍆");
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})
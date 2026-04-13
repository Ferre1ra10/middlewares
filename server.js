const express = require('express');
const path = require('path');
const validar = require('./middlewares/validar');

const app = express();

// Permite que o servidor entenda dados enviados em formato JSON
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota com middleware de validação
app.post('/cadastro', validar, (req, res) => {
    res.json({ mensagem: "Paciente cadastrado com sucesso" });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
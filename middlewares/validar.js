module.exports = function (req, res, next) {
    const { nome, cpf } = req.body;

    // Verifica se os campos estão vazios
    if (!nome || !cpf) {
        return res.status(400).json({ erro: "Campos obrigatórios" });
    }

    // Verifica a regra de 11 caracteres do CPF
    if (cpf.length !== 11) {
        return res.status(400).json({ erro: "CPF inválido" });
    }

    // Libera o fluxo se estiver tudo certo
    next();
};
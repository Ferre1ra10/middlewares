document.getElementById("form").addEventListener("submit", async (e) => {
    // Evita o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Cria o objeto com os dados dos inputs
    const data = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value
    };

    // Envia os dados para o servidor usando fetch
    const res = await fetch("/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    // Recebe e exibe a resposta
    const json = await res.json();
    alert(JSON.stringify(json));
});
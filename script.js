// Função para agendar a consulta
function agendar() {
    alert("Agendamento realizado com sucesso!");
}

// Validar o formulário de agendamento
document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const servico = document.getElementById('servico').value;

    if (!nome || !telefone || !data || !servico) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Agendamento realizado com sucesso!");
    }
});

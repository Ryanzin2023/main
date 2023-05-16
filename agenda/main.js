// main.js

// Selecionar o formulário de adicionar contatos
const formContato = document.getElementById("form_contato");

// Selecionar a tabela de contatos
const tabelaContatos = document.querySelector("table tbody");

// Adicionar um evento de envio ao formulário
formContato.addEventListener("submit", function (event) {
  event.preventDefault(); // Impedir o envio padrão do formulário

  // Obter os valores dos campos de entrada
  const nome = document.getElementById("nome_contato").value;
  const email = document.getElementById("email_contato").value;
  const telefone = document.getElementById("telefone_contato").value;

  // Criar uma nova linha na tabela com os dados do contato
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${email}</td>
    <td>${telefone}</td>
  `;

  // Adicionar a nova linha à tabela
  tabelaContatos.appendChild(novaLinha);

  // Limpar os campos do formulário
  formContato.reset();
});

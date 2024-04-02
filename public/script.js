// Captura o valor imputado na index de id=enviar
const botaoEnviar = document.getElementById("enviar");
// Captura o valor imputado na index de id=texto
const texto = document.getElementById("texto");
// Captura o valor imputado na index de id=mensagens
const chat = document.getElementById("mensagens");

//variável que faz comunição do front-end com o back-end
const socket = io();

// Função que testa se a caixa de texto estar vazia
botaoEnviar.addEventListener("click", () => {
  if (texto.value !== "") {
    socket.emit("nova mensagem", texto.value);
    texto.value = "";
  }
});

socket.addEventListener("nova mensagem", (msg) => {
  const novaMensagem = document.createElement("li"); //cria um elemento <li></li>
  novaMensagem.classList.add("mensagem"); //cria a classe mensagem no <li class="mensagem"></li>
  novaMensagem.textContent = msg; //manda a mensagem msg na variavem de <li class="mensagem">msg</li>
  chat.appendChild(novaMensagem); //faz a junção de todas as mensagens enviadas em um bloco
});

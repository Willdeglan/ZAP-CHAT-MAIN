//Install package Express on CMD 'npm install express' - to install an external express package
//Import socket.io package using 'npm install socket.io'

// cria a variável http para receber as configurações http
const http = require("http");
// cria a variável express para receber o pacote de ferramentas express
const express = require("express");
// cria a variável app que receber as configurações da função express
const app = express();

// cria a varrável app que vai rodar o servidor http
const servidorHttp = http.createServer(app);
// importar a função socket.io e aplica na variável servidorHTTP e entrega a variável io
const io = require("socket.io")(servidorHttp);

// app usa express.static para criar a pagina com o html, css e javascript da pasta public
app.use(express.static("public"));

// A variável io fica escutando um evento a ser exexutado
io.addListener("connection", (socket) => {
    console.log("um usuário acabou de conectar");
    socket.addListener("nova mensagem", (msg) => {
        io.emit("nova mensagem", msg);
    });
});
    


// configuração de porta de saída 5050 e direcionando para o ipv4 designado
servidorHttp.listen(5050, '192.168.25.197');

var http = require('http');

http.createServer(function(req , res){
    res.end("Olá , estou Treinando NodeJs");
}).listen(8081);
console.log("O Servidor está rodando...");
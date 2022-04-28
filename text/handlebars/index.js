const express = require("express");

const app = express();
 
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
 //Template Engine

 app.engine('handlebars' , exphbs({layouts: 'main'}))
 app.set('view engine' , 'handlebars')

 //Conexão com Banco de Dados

const sequelize = new Sequelize('sistemadeCadastro' , 'root' , '' , {
    host: "localhost",
    dialect: 'mysql'
})

//Criando Rotas

app.get('/cad' , function(req , res){
    res.render('formulario.handlebars')
})

app.listen(8081 , function(){
   console.log("Servidor Rodando na URL http://localhost:8081");
});
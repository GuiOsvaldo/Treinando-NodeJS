/*  const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadeCadastro' , 'root' , '' , {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
     console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se Conectar:" +erro)
});
*/
//Models para usuários e Postagem

const postagem = sequelize.define('postagem' , {   
       titulo: {
          type: Sequelize.STRING
       },

     conteudo: {
        type: Sequelize.TEXT
    }

})

// Esta função cria a tabela *Postagem* Automaticamente
//postagem.sync({force:true})

/* Inserir no Dados na Tabela Postagem com NodeJS  */
/*  Inserido com Sucesso

postagem.create({
    titulo: "Praticando NODEJS",
    conteudo: "Estou Aprendendo Nodejs" 
})

*/
/* Fim da Inserção de Dados */

const usuario = sequelize.define('usuarios' , {
       nome: {
           type: Sequelize.STRING
       },
       sobreNome: {
           type: Sequelize.STRING
       },
       idade:{
            type: Sequelize.INTEGER
       },
        email:{
            type:Sequelize.STRING
        }

})

//usuario.sync({force: true})

/* Inserindo Dados na Tabela Usuário Com Nodejs */
/* Inserido com sucesso  

usuario.create({
    nome: "Osvaldo Pedro Francisco",
    sobreNome: "Beto",
    idade: 21,
    email: "osbaldogui744@gmail.com"
})

*/
const mysql = require('mysql2');

//criar os parâmetros de conexão (credenciais)
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'catolica', //catolica
    database: 'userdb_leoclemons',
    port: '3307'
});

//estabelecer a conexão com o banco
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o módulo
module.exports = db;

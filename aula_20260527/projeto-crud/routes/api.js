// lógica do backend - CRUD
const express = require('express')

// modeularizar as rotas
const router = express.Router()

const db = require('../db'); // conectando ao banco de dados

// CRUD
//create - post (sql: insert)
//read - get (sql: select)
//update - put (sql: update)
//delete - delete (sql: delete)

router.post('/', (req, res)=>{
    const {nome, email} = req.body; // corpo da requisicao

    db.query('INSERT INTO users (nome, email) VALUES(?, ?)', [nome, email],
        (err, result)=> {
            if (err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email});
        }
    );
});

module.exports = router;


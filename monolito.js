const express = require('express');
const app = express();

app.use(express.json());

let users = [] 
let orders = []

// Rota para cadastrar usuário

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({message: 'Usuário cadastrado com sucesso!', user});
});

app.get('/user_data', (req, res) => {
    res.send({users});
});


app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.send({message: 'Pedido cadastrado com sucesso!', order});	
});

app.get('/order_data', (req, res) => {
    res.send({orders});
});

app.get('/all_data', (req, res) => {
    res.send({users, orders});
});


app.listen(3000, () => {
    console.log('Servidor monolítico rodando na porta 3000');
})
const express = require('express');
const app = express();

app.use(express.json());

let pedidosCadastrados = [];

app.post('/pedidos', (req, res) => { 

    const { id, produto, quantidade } = req.body; // Estrutura do pedido
    
    if (!id || !produto || !quantidade) { // Verifica se o pedido tem atributos faltando - erro por parte do cliente (400)
        return res.status(400).send({ message: 'Pedido inválido!' });
    }

    const novoPedido = { id, produto, quantidade }; 
    pedidosCadastrados.push(novoPedido);
    res.status(201).send({ message: 'Pedido cadastrado com sucesso!', pedido: novoPedido }); //A requisição foi bem sucedida E o pedido foi criado (201)
});

app.get('/pedidos-cadastrados', (req, res) => {
    res.status(200).json({ pedidos: pedidosCadastrados }); //A requisição foi bem sucedida (200)
});

app.get('/pedidos-cadastrados/:id', (req, res) => {
    const pedidoID = req.params.id;

    const pedido = pedidosCadastrados.find(p => p.id === pedidoID); 
    
    if (!pedido) { // Verifica se o pedido procurado não existe - erro por parte do cliente E o recurso não existe (404)
        return res.status(404).send({ message: 'Pedido não encontrado!' });
    }

    res.status(200).json({ pedido }); //A requisição foi bem sucedida (200)

});

app.put('editar-pedido/:id', (req, res) => { 
    const pedidoID = req.params.id;
    const pedidoIndex = pedidosCadastrados.findIndex(p => p.id === pedidoID); // Encontra o índice do pedido a ser editado

    const { produto, quantidade } = req.body; // Estrutura da edição


    if (pedidoIndex === -1) { // Verifica se o pedido procurado não existe - erro por parte do cliente E o recurso não existe (404)
        return res.status(404).send({ message: 'Pedido não encontrado!' });
    }

    if(!produto || !quantidade) { // Verifica se o pedido tem atributos faltando - erro por parte do cliente (400)
        return res.status(400).send({ message: 'Modificação de Pedido inválida!' });
    }

    pedidosCadastrados[pedidoIndex] = {id: pedidoID, produto, quantidade};
    res.status(200).send({ message: 'Pedido editado com sucesso!'}); //A requisição foi bem sucedida (200)

});

app.delete('excluir-pedido/:id', (req, res) => { 
    const pedidoID = req.params.id;
    const pedidoIndex = pedidosCadastrados.findIndex(p => p.id === pedidoID); // Encontra o índice do pedido a ser editado

    if (pedidoIndex === -1) { // Verifica se o pedido procurado não existe - erro por parte do cliente E o recurso não existe (404)
        return res.status(404).send({ message: 'Pedido não encontrado!' });
    }

    pedidosCadastrados.splice(pedidoIndex, 1); 
    res.status(200).send({ message: 'Pedido excluído com sucesso!' }); //A requisição foi bem sucedida (200)

});

app.listen(4000, () => {console.log('Order service rodando na porta 4000');});


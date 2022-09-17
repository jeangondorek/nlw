import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        { id:1, name: 'pexeee'},
        { id:2, name: 'pato'},
        { id:3, name: 'fato'},
        ]);
});

app.listen(3333);
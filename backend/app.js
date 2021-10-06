const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('exporess');
});

app.get('/api', (request, response) => {
    response.json([
        {id:1, content: 'hello'},
    ]);
});

app.post('/api/post', (request, response) => {
    response.json([
        {id:1, content: 'hello'},
    ]);
});

app.listen(3000, () =>{
    console.log('서버 실행');
});
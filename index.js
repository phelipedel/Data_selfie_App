const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const app = express();
app.listen(3000, () => console.log('listining at 3000'))
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}));

// para obter os dados do cliente da localizacao dele vamos presisar 
// Routing 
// Json parsing 
// POST with fetch()

app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    });

});



'use strict';
//npm package that we installed with npm i express
const express = require ('express');
// pulls in the express object so that
const app = express();
const PORT = 3000

app.use(express.static('./public')); //use this to deploy html page so it knows

//this is our homepage it will serve up html file
app.get('/' , (request, response) => {

    response.sendFile('./public/index.html')

})
// api route , it is meant to serve data to json
app.get('/test', (request, response) => {
    response.send('this worked!');
});

app.listen(PORT, () => {
console.log(`listening on ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.static('assets/dist'));

app.get('*', (req,res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(8080, () => console.log('Listening on port 8080'));
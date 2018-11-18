const express = require('express');
const app = express();
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import App from './src/App.js'

app.use(express.static('assets/dist'));

app.get('*', (req,res) => {
    //res.sendFile(__dirname+'/public/index.html');

    let context = {}
    let reactDom = renderToString(
    <StaticRouter context = {context} location={req.url}>
    <App />
    </StaticRouter>)
    const helmet = Helmet.renderStatic();
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/style.css">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
    </head>
    <body>
        <div id="app">
        ${reactDom}
        </div>
        <script src="style.bundle.js"></script>
        <script src="vendors.bundle.js"></script>
        <script src="bundle.js"></script>
    </body>
    </html>
        `
        res.send(htmlString);
});



app.listen(8080, () => console.log('Listening on port 8080'));
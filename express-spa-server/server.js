// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

// Habilitar CORS
app.use(cors());

// Servir la SPA desde el directorio "browser"
//app.use('', express.static(path.join(__dirname, 'ag-17-app','browser')));
//
//// Enrutar todas las demás solicitudes a la página principal
//app.get('/*', (req, res) => {
//    res.sendFile(path.join(__dirname,'ag-17-app', 'browser', 'index.html'));
//});

// Servir la SPA desde el directorio "browser"
app.use('', express.static(path.join(__dirname, 'www')));

// Enrutar todas las demás solicitudes a la página principal
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Iniciar el servidor en http://localhost:3001
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
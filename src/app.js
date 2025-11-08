const express = require('express');
const bodyParser = require('body-parser');
const taller1Routes = require('./routes/taller1.routes');
const taller2Routes = require('./routes/taller2.routes');
const taller3Routes = require('./routes/taller3.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/taller1', taller1Routes);
app.use('/api/taller2', taller2Routes);
app.use('/api/taller3', taller3Routes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = 3500;

let visitCount = 0; //contador de visitas

//EJS como motor de plantillas
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    visitCount++;  // Incrementa el contador 

    // vista con el contador de visitas
    res.render('index', {
        title: 'Bienvenido a tu inventario de objetivos',
        message: '¡Estás listo para la misión, Spartan!',
        visitCount: visitCount  // Pasa el contador de visitas a la vista
    });
});


app.use(express.static('public'));

// servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

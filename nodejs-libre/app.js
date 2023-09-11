const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Ruta para mostrar las encuestas y resultados
app.get('/', (req, res) => {
  const preguntas = require('./preguntas.json');
  res.render('index', { preguntas });
});

// Ruta para procesar la votación
app.post('/votar', (req, res) => {
  const { preguntaId, respuestaIndex } = req.body;
  const preguntas = require('./preguntas.json');
  
  if (preguntas[preguntaId] && preguntas[preguntaId].respuestas[respuestaIndex]) {
    preguntas[preguntaId].respuestas[respuestaIndex].votos += 1;
    // Guardar los cambios en el archivo JSON
    const fs = require('fs');
    fs.writeFileSync('./preguntas.json', JSON.stringify(preguntas, null, 2));
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`La aplicación está funcionando en el puerto ${port}`);
});

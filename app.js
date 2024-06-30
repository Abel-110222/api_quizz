const express = require('express');
const cors = require('cors'); // Asegúrate de importar cors
const app = express();
const questionRoutes = require('./routes/questionRoutes');
const { db, sequelize } = require('./models'); // Asegúrate de importar `sequelize` y `db` correctamente

// Configura CORS para permitir solicitudes desde cualquier origen (*)
app.use(cors());
app.use(express.json());
app.use('/api', questionRoutes);

// Definir los endpoints de la API para la respuesta en la ruta raíz
const ApiEndpoints = [
  '/questions', // Agrega aquí otros endpoints que tengas
];

app.get('/', (_req, res) => {
  res.json({
    message: `Welcome to the Blog QUEMADOS MID see our docs at ${process.env.API_URL}/api/docs`,
    endpoints: ApiEndpoints.map(endpoint => `${process.env.API_URL}${endpoint}`) // Asegúrate de definir `ApiEndpoints`
  });
});

sequelize.sync()
  .then(() => {
    const port = process.env.PORT || 3000; // Usa el puerto 3000 por defecto si `process.env.PORT` no está definido
    app.listen(port, () => {
      console.log(`Server is running on ${process.env.API_URL}:${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//lamada a la base de datos y configuracion de modelos
require("./db");

const apiRouter = require("./routes/api");

// Configuracion de rutas "/api" configuradas con apiRouter
app.use("/api", apiRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});

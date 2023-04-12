const express = require("express");
const { userRouter } = require("./routes/user.routes.js");

// Conexión a la BBDD
const { connect } = require("./db.js");
connect();

// Configuración del server
const PORT = 3000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Rutas
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Esta es la home de nuestra API");
});

// Usamos las rutas
server.use("/", router);
server.use("/user", userRouter);

server.listen(PORT, () => {
  console.log(`Server levantado en el puerto ${PORT}`);
});

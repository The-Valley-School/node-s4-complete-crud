const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { User } = require("../models/User.js");

const userList = [
  {
    firstName: "Fran",
    lastName: "Linde",
    phone: 123123123,
  },
  {
    firstName: "Edu",
    lastName: "Cuadrado",
  },
  {
    firstName: "Gon",
    lastName: "Fernández",
    phone: 666777888,
  },
];

connect().then(() => {
  console.log("Tenemos conexión");

  // Borrar datos
  User.collection.drop().then(() => {
    console.log("Usuarios eliminados");

    // Añadimos usuarios
    const documents = userList.map((user) => new User(user));
    User.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!"))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  });
});

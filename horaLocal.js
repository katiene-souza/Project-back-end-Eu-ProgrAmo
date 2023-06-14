const express = require("express");

const app = express();

const horaLocal = (req, res) => {
    const data = new Date();

    const hora = data.toLocaleTimeString('pt-BR');

    res.send(hora);
};

app.get("/hora", horaLocal)

const port = 3000;
app.listen(port, () => {
    console.log("app running on port:", port);
});
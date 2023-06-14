const express = require("express");

const app = express();

const mulheres = [
    {
        nome: "Katiene Souza",
        imagem: "https://avatars.githubusercontent.com/u/85809975?v=4",
        minibio: "desenvolvedora fullstack"
    },
    {
        nome: "Katiene Souza",
        imagem: "https://avatars.githubusercontent.com/u/85809975?v=4",
        minibio: "desenvolvedora fullstack"
    },
    {
        nome: "Katiene Souza",
        imagem: "https://avatars.githubusercontent.com/u/85809975?v=4",
        minibio: "desenvolvedora fullstack"
    }
];

const mostrarMulheres = (req, res) => {
    res.json(mulheres);
};

app.get("/mulheres", mostrarMulheres);

const port = 3000;
app.listen(port, () => {
    console.log("app running on port:", port);
});
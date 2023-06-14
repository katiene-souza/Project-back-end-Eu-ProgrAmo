const express = require("express");

const app = express();

const mulher = (req, res) => {
    res.json({
        nome: "Katiene Souza",
        imagem: "https://avatars.githubusercontent.com/u/85809975?v=4",
        minibio: "desenvolvedora fullstack"
    });
};

app.get("/mulher", mulher);

const port = 3000;
app.listen(port, () => {
    console.log("app running on port:", port);
});
const express = require("express");

const app = express();

const olaMundo = (req, res) => {
    res.send("ola mundo");
};

app.get("/ola", olaMundo)


const port = 3000;
app.listen(port, () => {
    console.log("app running on port:", port);
});
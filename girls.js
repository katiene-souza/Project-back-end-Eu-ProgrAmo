const express = require("express");
const cors = require("cors");

const girls = require("./girlModel");

const connectDatabase = require("./database");
connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const findGirls = async (req, res) => {
    try {
        const girlsDatabase = await girls.find();

        res.json(girlsDatabase);

    } catch(err) {
        res.status(404).json(err);
    };
};

const createGirl = async (req, res) => {
    try {
        const { body: girl } = req;

        const newGirl = await girls.create(girl);

        res.status(201).json(newGirl);
        
    } catch (err) {
        res.status(404).json(err);
    };
};

const updateGirl = async (req, res) => {   
    try {
        const {params: { id }, body: girl} = req;
    
        const girlById = await girls.findByIdAndUpdate(id, girl);
    
        res.status(201).json(girlById);
    
       } catch (err) {
            res.status(404).json(err);
       };
};

const deleteGirl = async (req, res) => {
    try{
        const { params: { id } } = req;

        await girls.findByIdAndDelete(id);

        res.status(201).json("sucess");

    } catch(err) {
        res.status(404).json(err);
    };
};

app.get("/girls", findGirls);
app.post("/girls", createGirl);
app.patch("/girls/:id", updateGirl);
app.delete("/girls/:id", deleteGirl);

const port = 3000;
app.listen(port, () => {
    console.log("app running on port:", port);
});

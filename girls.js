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
        res.status(404).json({
            error: err
        });
    };
};

const createGirl = async (req, res) => {
    try {
        const { body: girl } = req;

        const newGirl = await girls.create(girl);

        res.status(201).json(data: newGirl);
        
    } catch (err) {
        res.status(404).json({
            message: "girls not created",
            error: err
        });
    };
};

const updateGirl = async (req, res) => {   
    try {
        const {params: { id }, body: girl} = req;
    
        const girlById = await girls.findByIdAndUpdate(id, girl);
    
        res.status(201).json(girlById);
    
       } catch (err) {
            res.status(404).json({
                message: "id not found",
                error: err
            });
       };
};

const deleteGirl = async (req, res) => {
    try{
        const { params: { id } } = req;

        await girls.findByIdAndDelete(id);

        res.status(201).json({
            message: "sucess"
        });

    } catch(err) {
        res.status(404).json({
            message: "id not found",
            error: err
        });
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

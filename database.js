const mongoose = require("mongoose");
require("dotenv").config();

async function connectDatabase() {
    try {
        console.log("connected on database inicied!");

        await mongoose.connect(process.env.DATABASE_URL);

        console.log("connected on database sucess!");
    } catch (error) {
        console.log(error);
    };
};

module.exports = connectDatabase;
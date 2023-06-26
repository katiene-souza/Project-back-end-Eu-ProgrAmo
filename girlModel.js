const mongoose = require("mongoose");

const girlModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        
        quote: {
            type: String,
            required: true
        },
    },
);

const girl = mongoose.model("girl", girlModel);

module.exports = girl;
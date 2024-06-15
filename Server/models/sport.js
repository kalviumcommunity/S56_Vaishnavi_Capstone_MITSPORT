const mongoose = require("mongoose");
const joi = require("joi");


const sportSchema = new mongoose.Schema({
    Batch: String,
    Sport: String,
    Timing: String
});

// Define the model
const Mitsport = mongoose.model("sports", sportSchema);

// Export the model
module.exports = {Mitsport};

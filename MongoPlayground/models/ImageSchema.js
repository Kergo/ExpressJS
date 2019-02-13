const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Image = new Schema({
    url: 
    {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    creationDate: 
    {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: Date.now
    },
    title: 
    {
        type: mongoose.SchemaTypes.String
    },
    description: 
    {
        type: mongoose.SchemaTypes.String
    },
    tags: 
    [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Tag"
    }]
});

module.exports = mongoose.model("Image", Image);
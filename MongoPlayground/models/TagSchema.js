const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tag = new Schema({
    name: 
    {
       type: mongoose.SchemaTypes.String,
       required: true,
       lowercase: true
    },
    creationDate: 
    {
        type: Date, 
        required: true,
        default: Date.now
    },
    images: 
    [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Image"
    }]
});

// const tagSchema = new mongoose.Schema({
//     name:
// })

module.exports = mongoose.model("Tag", Tag);
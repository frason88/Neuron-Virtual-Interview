const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roomidSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})
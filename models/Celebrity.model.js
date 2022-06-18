const mongoose = require('mongoose');
const { Schema } = mongoose;

const celebrityModel = new Schema({
    name:{
        type: String,
    },
    occupation:{
        type: String,
    },
    catchPhrase:{
        type: String,
    }
})

const Celebrity = mongoose.model('Celebrity', celebrityModel);
module.exports = Celebrity;


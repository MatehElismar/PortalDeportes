const mongoose = require('mongoose'),
{ ObjectId } = mongoose.Schema.Types;

const TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pos: {type: Number, required: true},
    avg: {type: Number, required: true},
    hr: {type: Number, required: true},
    rbi: Number
}, { 
    toObject : {getters: true},
    toJSON : {getters: true}
})

module.exports = mongoose.model('Team', TeamSchema);

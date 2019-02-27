const mongoose = require('mongoose'),
{ ObjectId } = mongoose.Schema.Types;

const TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    G: {type: Number, required: true},
    P: {type: Number, required: true},
    PTC: {type: Number, required: true},
    PDL: {type: Number, required: true},
    rach: {type: Number, required: true}, 
}, { 
    toObject : {getters: true},
    toJSON : {getters: true}
})

module.exports = mongoose.model('Team', TeamSchema);

const mongoose = require('mongoose'),
{ ObjectId } = mongoose.Schema.Types;

const ConferenceSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, { 
    toObject : {getters: true},
    toJSON : {getters: true}
})

module.exports = mongoose.model('Conference', ConferenceSchema);

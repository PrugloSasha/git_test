const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    FIO: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    KTnumber: {type: String, required: true},
    position: {type: String, required: true},
    phone: {type: String, required: true},
    classroom: {type: String, required: true},
    explaining: {type: String, required: true},
    building: {type: String, required: true},
})
module.exports = model('Problem', schema)
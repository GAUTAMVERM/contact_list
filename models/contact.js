//including mongoose
const mongoose = require('mongoose');
//creating schema
const contactSchema = new mongoose.Schema({
     name : {
        type: String,
        required: true
     },
     number: {
        type: String,
        required : true
     }
});
//naming database Contact which ill be using schema of contactSchema
const Contact = mongoose.model('Contact',contactSchema);
//exporting the module
module.exports = Contact;
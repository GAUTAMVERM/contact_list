//adding libraray
const mongoose =  require('mongoose');

//connecting to database
mongoose.connect('mongodb://localhost/contact_list_db');
//storing the connection
const db = mongoose.connection;
//making sure there is no error
db.on('error', console.error.bind(console,'error connecting to db'));
//printing to show proper connection
db.once('open',function(){
    console.log("successly connected");
})
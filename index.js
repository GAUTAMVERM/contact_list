const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 8000;
const db = require('./config/mongoose')
const Contact = require('./models/contact');
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

// app.use(function(req,res,next){
//     console.log('middleware1 is called!!');
//     next();
// })

// var contactList= [
//     {
//         name:'GAUTAM',
//         number:9205438218

//     },
//     {
//         name: 'verma',
//         number: 7532099143
//     }
// ]


app.get('/',async function(req,res){
        try{
            const contacts = await Contact.find({});
            return res.render('home',{
               title:"MY CONTACT LIST",
               contact_list:contacts 
            })
        }catch(err){
            console.log("can't fetch");
            return res.redirect('back');
        }

})

app.get('/practice',function(req,res){
    return res.render('practice',{title:'hai kuch'})
})

app.post('/create-number', async function(req,res){
   try{
    const newContact = await Contact.create({
        name : req.body.name,
        number : req.body.number,
    });
    console.log('*******',newContact);
    return res.redirect('back');
   }catch(err){
    console.log('ERROR IN CREATING CONTACT :',err);
    return res.redirect('back');

   }
});

app.get('/delete-contact',async function(req,res){
    try{
        let id = req.query.id;
        await Contact.findByIdAndDelete(id);
        console.log('deleted in db');
        return res.redirect('back');
    }catch(err){
        console.log('error in deleting');
        return res.redirect('back');
    }
});

app.listen(port, (err)=>{
    if(err){
        console.log("ERROR IN SERVER", err);
        return;
    }
    console.log("SERVER IS UP AND RUNNING",port);
    
})
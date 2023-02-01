const express=require('express');
const app=express();
const path=require('path');
const nodemailer = require('nodemailer');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors = require('cors');
const fs=require('fs');
const port=8000;

mongoose.connect("mongodb+srv://vikas18:Virat18*@cluster0.s255uxr.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });



const complainSchema = new mongoose.Schema({ 
    name: String,
    phone: String,
    email: String,
    branch:String,
    room: String,
    problem: String,
    comment: String
});

const signin=mongoose.model("sign",complainSchema);
const complain = mongoose.model("hostel",complainSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // For serving static files
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')   // Set the template engine as pug
app.set('views', path.join(__dirname,'views')) // Set the views directory

let content=fs.readFileSync('./views/submit.html',"utf-8");

app.post('/complain', (req,res)=>{ 
     // Saving the data recieved from user to the database
    var mydata=new complain(req.body);
    mydata.save().then(()=>{
        res.send(content);
    }).catch(()=>{
        res.status(400).send("<h1>Submission is unsuccessful! <br> Try Again</h1>")
    })
     console.log(req.body);
    //  res.status(200).render('contact.pug');
});

app.get('/tasks',(req,res)=>{
     
    complain.find({})
    .then((x)=>{
        res.status(200).render('tasks.ejs',{x});
        console.log(x);
    })
    .catch((y)=>{
        console.log(y);
    })
})


let Filecontent = fs.readFileSync('./views/chatbot.html',"utf-8");

app.post('/signin',(req,res)=>{

    var mydata=new signin(req.body);
    mydata.save().then(()=>{
        res.send(Filecontent);
    }).catch(()=>{
        res.status(400).send("<h1>Submission is unsuccessful! <br> Try Again</h1>")
    })
    emailsent=req.body;
    // send email here
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'hostelchatbot544@gmail.com',
            pass:'wqtnfhhjkyqymytx'
      },
 });
 
 
 const mailoptions = {
       from:'hostelchatbot544@gmail.com',
       to:`${emailsent.email}`,
       subject:'Hostel Chat Bot Signing in',
       text:`You have successfully sign in to Hostel Chat Bot App. `
 };
  
 transporter.sendMail(mailoptions,function(err){
     if(err){
         console.log(err);
     }
     else{ 
         console.log('Message sent!!!');
     }
 });
    console.log(req.body);
});

app.get('/email',(req,res)=>{
    res.status(200).render('login.pug');
});

app.get('/', (req,res)=>{
    res.status(200).render('index.pug');
}); 

app.get('/about', (req,res)=>{
    res.status(200).render('about.pug');
});

app.get('/signin', (req,res)=>{
    res.status(200).render('SignIn.pug');
});

app.get('/chatbot', (req,res)=>{
    res.status(200).send(Filecontent);
});

app.get('/complain', (req,res)=>{
     res.status(200).render('complain.pug');
})



app.listen(port, () => { 
    console.log(`This application started succesfully on ${port}`);   // by using app.listen we can listen the request at given port.
 });
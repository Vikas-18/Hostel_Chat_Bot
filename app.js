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
    enrollmentnumber:String,
    name: String,
    phone: String,
    hostel:String,
    email: String,
    password:String,
    confirmpassword:String,
    room: String,
    problem: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

const student=mongoose.model("studentDetail",complainSchema);
const complain = mongoose.model("hostel",complainSchema);
const enroll1234=mongoose.model("enrollmentnumberdetail",complainSchema);

setInterval(() => {
  const thirtySecondsAgo = new Date(Date.now() - 30 * 1000);
  student.deleteMany({ date: { $lt: thirtySecondsAgo } }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 30 * 1000);

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
});

app.get('/admin',(req,res)=>{
      res.status(200).render("admin.pug");
})

app.post('/admin',(req,res)=>{
    console.log(req.body);

    let hostel1=null;
    if(req.body.key=="hmnd")
      hostel1="Hostel-Mahanadi";
    else if(req.body.key=="idwt")
      hostel1="Hostel-Indrawati";
    else if(req.body.key=="pgh")
      hostel1="PG Hostel";
    else if(req.body.key=="snth")
      hostel1="Seonath";
    else if(req.body.key=="mnpt")
      hostel1="Hostel-Mainput";
    else if(req.body.key=="ctkt")
      hostel1="Hostel-Chitrakot";
    else if(req.body.key=="mlhr")
      hostel1="Hostel-Malhar";
    else if(req.body.key=="ktmsr")
      hostel1="Hostel-Kotumsar";
    else if(req.body.key=="srpr")
      hostel1="Hostel-Sirpur";

    if(hostel1!=null){
      complain.find({hostel:hostel1})
      .then((x)=>{
          res.status(200).render('tasks.ejs',{x});
          console.log(x);
      })
      .catch((y)=>{
          console.log(y);
      })
    }
    else res.status(400).send(`<script>alert("Invalid Admin Key")</script>`);
    
});

app.get('/admin/:key',(req,res)=>{
    req.body.key = req.params.key;
    let hostel1;
    if(req.body.key=="hmnd")
      hostel1="Hostel-Mahanadi";
    else if(req.body.key=="idwt")
      hostel1="Hostel-Indrawati";
    else if(req.body.key=="pgh")
      hostel1="PG Hostel";
    else if(req.body.key=="snth")
      hostel1="Seonath";
    else if(req.body.key=="mnpt")
      hostel1="Hostel-Mainput";
    else if(req.body.key=="ctkt")
      hostel1="Hostel-Chitrakot";
    else if(req.body.key=="mlhr")
      hostel1="Hostel-Malhar";
    else if(req.body.key=="ktmsr")
      hostel1="Hostel-Kotumsar";
    else if(req.body.key=="srpr")
      hostel1="Hostel-Sirpur";
    
      complain.find({hostel:hostel1})
      .then((x)=>{
          res.status(200).render('tasks.ejs',{x});
          console.log(x);
      })
      .catch((y)=>{
          console.log(y);
      })
    
})



let Filecontent = fs.readFileSync('./views/chatbot.html',"utf-8");

app.post('/signin',async(req,res)=>{

    try {
        const enroll1=req.body.enrollmentnumber;
        // const password=req.body.password;
 
        const user  = await enroll1234.findOne({enrollmentnumber:enroll1});
        if(user==null){
            res.send(`<script>alert("Please Enter valid username")</script>`);
        }
        else{
            const p=req.body.password;
            const cp=req.body.confirmpassword;
            
            if(p==cp){
                var mydata=new student(req.body);
                mydata.save().then(()=>{
                    res.send(Filecontent);
                }).catch(()=>{
                    res.status(400).send("<h1>Submission is unsuccessful! <br> Try Again</h1>")
                });

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
            }
            else {
                res.send("passwords are not matching")
            }
        }
     } catch (error) {
         res.status(400).send(error);
     }    
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
});

app.get('/login', (req,res)=>{
     res.status(200).render('login.pug');
});

app.post("/login",async(req,res)=>{
    try {
       const enroll1=req.body.enrollmentnumber;
       const password=req.body.password;

       const user  = await student.findOne({enrollmentnumber:enroll1});
       
       if(password==user.password){
           res.status(201).send(Filecontent);
       }
       else{
           res.send(`<script>alert("Invalid Login details")</script>`);
       }

    } catch (error) {
        res.status(400).send(`<script>alert("Invalid Login details")</script>`);
    }
});

app.listen(port, () => { 
    console.log(`This application started succesfully on ${port}`);   // by using app.listen we can listen the request at given port.
 });
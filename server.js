// server.js

// Import required modules
const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


// Initialize the express app
const app = express();
const PORT = 3000;
app.use(bodyparser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);

})

app.post("/", function(req,res){
  const comm = req.body.message;
  const nam = req.body.name;
  const tel = req.body.phone;
var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'radhasangcompany@gmail.com',
        pass: 'qlyf gpbx fmzv gjrr'
    }
});

var mailOption = {
    from: 'radhasangcompany@gmail.com',
    to: req.body.email,
    cc: 'radhasangcompany@gmail.com',
    subject: 'Thanks for giving feedback' + nam,
    text: 'Thanks for your message you have sent to us -->' + comm,
};

transpoter.sendMail(mailOption, function(error, info){
  if(error){
    console.log(error);
  }else{
    //res.send("mail submitte");
    res.redirect('/');
    console.log("email sent" + info.response);
  
  }
})


});  

// Start the server
app.listen(3000,function(){
    console.log(`Server is running on http://localhost:${3000}`);
});

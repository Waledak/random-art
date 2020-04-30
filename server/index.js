const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.post('/send', (req, res) => {
  try{
    const mailOptions = {
      from:process.env.email,
      to:req.body.email,
      subject: "Travel Art IFTTT",
      html: "Hi !\r\n\nThanks for following our IFTTT!\r\n\nYou will now receive a new work of art every weeks !"
    }
    transporter.sendMail(mailOptions, function(err, info){
      if (err){
        res.status(500).send({
          success:false
        })
      }else{
        res.send({
          success:true
        })
      }
    })
  } catch(error){
    res.status(500).send({
      success: false
    });
  }
});
app.listen(3030, () => {
  console.log('server start on port 3030');
});
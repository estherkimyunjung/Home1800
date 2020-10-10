require('dotenv').config()

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: 'test123esther@gmail.com',
  to: 'test1124esther@gmail.com',
  // to: 'test1124esther@gmail.com, second@gmail.com',
  // cc: 'second@gmail.com',
  // bcc: 'second@gmail.com',
  replyTo:'test123esther@gmail.com',
  subject: 'REBATE TEST',
  text: "Thank you for the service",
  attachments:[
    {filename: 'rebate.pdf',
    path: './rebate.pdf'}
  ]
};

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error Occurs", err)
//   }else {
//     console.log("Email sent!!")
//   }
// });

transporter.sendMail(mailOptions)
.then(function(response) {
  console.log("Email sent!!!");
})
.catch(function(error) {
  console.log('Error', error);
});

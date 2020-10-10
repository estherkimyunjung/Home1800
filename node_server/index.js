const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors')
const app = express();
// REQUIRED FOR SENDING FILES STORED ON SERVER BUT NOT FOR BASE64 STRINGS
const fs = require('fs');

const http = require("http")
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

io.on("connection", socket => {
    socket.emit("your id", socket.id)
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


console.log(process.cwd());
console.log(path.dirname(__filename));

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8818ac47383114",
    pass: "6d4a2bbdd4eb75"
  }
});

// EXAMPLE OF SENDING A FILE STORED IN THE server FOLDER
var mailOptions = {
  // YOU CAN USE ANY EMAIL YOU WANT FOR FROM AND TO
  // WHEN THE EMAIL SENDS IT'LL SHOW UP IN MAILTRAP IN A FEW SECONDS
  from: '"Esther" <esther@gmail.com>',
  to: '"Rupa" <2d1004d14a-5620b3@inbox.mailtrap.io>',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
  attachments: [
    {   
        filename: 'rebate.pdf',
        content: fs.createReadStream(path.dirname(__filename) + '/rebate.pdf'),
        contentType: 'application/pdf'
    }
  ]
};

// EXAMPLE SENDING BASE64 STRING AS A PDF
// TO REDUCE THE AMOUNT OF DATA STORED ON THE SERVER AND ALLOW JSON REQUESTS
// I CONVERTED THE PDF TO A BASE64 STRING ON THE FRONTEND AND SENT THAT
// THAT ALLOWED ME TO ADD A REALLY SIMPLE ATTACHMENT
function makeMailOptions(reqBody) {
  return {
    from: '"Esther" <esther@gmail.com>',
    to: '"Newton Williams" <2d1004d14a-5620b3@inbox.mailtrap.io>',  
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
    html: `
      <h2>Client Information</h2>
      <ul> 
        <li> Name: ${reqBody.firstname + ' ' + reqBody.lastname}</li>
        <li> Address: ${reqBody.address}</li>
        <li> Email: ${reqBody.email}</li>
        <h3> Agent: ${reqBody.agent}</h3>
      </ul>
      <hr/>
      <h2> Message </h2>
      <hr/>
      <h3>${reqBody.message}</h3>
      `,
      attachments: [
      {   
        filename: `rebate.pdf`,
        content: reqBody.file,
        encoding: 'base64',
      }
    ]
  };
}

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    greeting: `Hello ${name}!`
  }));
});

app.post('/api/mail', (req, res) => {
  // console.log(makeMailOptions(req.body))
  transport.sendMail(makeMailOptions(req.body), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

});

app.listen(process.env.PORT || 8080, () =>
  console.log('Express server is running on localhost:8080'));

  
const nodemailer = require('nodemailer');
require('dotenv/config');
exports.sendMailMeet = async (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: process.env.USER,
    to: data.email,
    subject: `Meetup Learning`,
    html: `
    
    <h3>Bienvenido !</h3>
    <ul>
      <li>Correo: ${data.email}</li>
      <li>URL del Meetup: ${data.url}</li>
    </ul> 
   
    `,
  };
  smtpTransport.sendMail(mailOptions, (error) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }

    smtpTransport.close();
  });
};

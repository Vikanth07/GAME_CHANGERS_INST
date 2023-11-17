var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('home');
});

router.get('/Request_tutor',(req,res)=>{
  res.render('Request_tutor');
});

router.get('/Request_student',(req,res)=>{
  res.render('Request_student');
});

router.post('/',(req,res)=>{
  const formData = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'yvikanth817@gmail.com',
      pass: 'kaeajzxsfoqbjyod',
    },
  });

  var mailoutput = "<html>\n\
                        <body>\n\
                        <table>\n\
                        <tr>\n\
                        <td>Name: </td>" + req.body.name + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Email: </td><td>" + req.body.email + "</td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Contactno: </td>" + req.body.contactno + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Subject/Skill: </td>" + req.body.Subject_skill + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>State: </td>" + req.body.state + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>City: </td>" + req.body.city + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Comments: </td>" + req.body.comments + "<td></td>\n\
                        </tr>\n\
                        </table></body></html>";

  // Email details
  const mailOptions = {
    from: 'yvikanth817@gmail.com',
    to: 'yvikanth817@gmail.com',
    subject: 'Form Submission',
    //text: `Form submitted with the following data:\n${JSON.stringify(formData, null, 2)}`,
    html: mailoutput,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Email could not be sent' });
    } else {
      console.log('Email sent: ' + info.response);
      console.log(formData);
      //res.status(200).json({ message: 'Email sent successfully' });
      res.render('home');
    }
  });
});


module.exports = router;

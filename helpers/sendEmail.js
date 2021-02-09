const nodemailer = require("nodemailer");

const sendEmail = (contactObject) => {
	console.log(contactObject);
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
		},
	});

	const mailOptions = {
		from: "Seif.Miehiar@gmail.com",
		to: `${contactObject.email}`,
		cc: "Seif.Miehiar@gmail.com",
		subject: `Seif Miehiar - Thank you for getting in touch with me! `,
		text: contactObject.message,
		html: template(contactObject),
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const template = (contactObject) => {
	console.log(contactObject);
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Seif Miehiar Email</title>
    <style type="text/css">
      @import url(http://fonts.googleapis.com/css?family=Lato:400);
  
    
    
      img {
        max-width: 600px;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      a {
        text-decoration: none;
        border: 0;
        outline: none;
        color: #21BEB4;
      }
  
      a img {
        border: none;
      }
  
      /* General styling */
  
      td, h1, h2, h3  {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 400;
      }
  
      body {
        -webkit-font-smoothing:antialiased;
        -webkit-text-size-adjust:none;
        width: 100%;
        height: 100%;
        color: #37302d;
        background: #ffffff;
      }
  
      table {
        background:
      }
  
      h1, h2, h3 {
        padding: 0;
        margin: 0;
        color: #ffffff;
        font-weight: 400;
      }
  
      h3 {
        color: #21c5ba;
        font-size: 24px;
      }
    </style>
  
    <style type="text/css" media="screen">
      @media screen {
         /* Thanks Outlook 2013! http://goo.gl/XLxpyl*/
        td, h1, h2, h3 {
          font-family: 'Lato', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
        }
      }

    </style>
  
    <style type="text/css" media="only screen and (max-width: 480px)">
      /* Mobile styles */
      @media only screen and (max-width: 480px) {
        table[class="w320"] {
          width: 320px !important;
        }
  
        table[class="w300"] {
          width: 300px !important;
        }
  
        table[class="w290"] {
          width: 290px !important;
        }
  
        td[class="w320"] {
          width: 320px !important;
        }
  
        td[class="mobile-center"] {
          text-align: center !important;
        }
  
        td[class="mobile-padding"] {
          padding-left: 20px !important;
          padding-right: 20px !important;
          padding-bottom: 20px !important;
        }
      }
    </style>

  </head>
  <body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
  <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%" >
    <tr>
      <td align="center" valign="top" bgcolor="#ffffff"  width="100%">
  
      <table cellspacing="0" cellpadding="0" width="100%">
        <tr>
          <td style="border-bottom: 3px solid #3bcdc3;" width="100%">
            <center>
              <table cellspacing="0" cellpadding="0" width="500" class="w320">
                <tr>
                  <td valign="top" style="padding:10px 0; text-align:left;" class="mobile-center">
                    <img width="300" height="125" src="https://i.postimg.cc/WpHYMCmr/Seif-Miehiar-logo.jpg">
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
        <tr>
          <td background="https://wallpaperaccess.com/full/1947431.jpg"
          bgcolor="#64594b"
          valign="top" 
          style="background: url(https://wallpaperaccess.com/full/1947431.jpg)
          no-repeat center;
          background-color: #64594b; 
          background-size: cover; 
        ">
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:303px;">
              <v:fill type="tile" src="https://www.filepicker.io/api/file/ewEXNrLlTneFGtlB5ryy" color="#64594b" />
              <v:textbox inset="0,0,0,0">
            <![endif]-->
            <div>
              <center>
                <table cellspacing="0" cellpadding="0" width="530" height="303" class="w320">
                  <tr>
                    <td valign="middle" style="vertical-align:middle; padding-right: 15px; padding-left: 15px; text-align:left;" class="mobile-center" height="303">
  
  
                    </td>
                  </tr>
                </table>
              </center>
            </div>
            <!--[if gte mso 9]>
              </v:textbox>
            </v:rect>
            <![endif]-->
          </td>
        </tr>
        <tr>
          <td valign="top">
            <center>
              <table cellspacing="0" cellpadding="0" width="500" class="w320">
                <tr>
                  <td>
  
                    <table cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td class="mobile-padding" style="text-align:left;">
                        <br>
                        <br>
                          Hi ${contactObject.name} <br><br>

                          Your message is well received as follows:<br>
                          "${contactObject.message}"<br><br> 
													
													I will contact you as soon as possible on the follow number +${contactObject.phoneNumber} or your email ${contactObject.email}.<br><br>

													Thanks you!
                          <br>
													<b>
													Seif Miehiar
													</b>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="mobile-padding">
                  <br>
                  <br>
                    <br>
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
        
            <center>
              
                        <div style="text-align:center; text-decoration: "none"">
                        <a href="https://github.com/Seif-Miehiar/">
                        <img src="https://img.icons8.com/fluent/96/000000/github.png"/>
                        </a>
                          <a href="https://www.facebook.com/Seif.Miehiar/">
                          <img src="https://img.icons8.com/fluent/96/000000/facebook-new.png"/>
                          </a>
                          <a href="https://www.linkedin.com/in/seif-miehiar/">
                          <img src="https://img.icons8.com/fluent/96/000000/linkedin.png"/>
                          </a>
                          <a href="https://stackoverflow.com/users/11769768/seif-miehiar">
                          <img src="https://img.icons8.com/color/96/000000/stackoverflow.png"/>
                          </a>
                          <a href="https://www.instagram.com/seif.miehiar/?hl=en">
                          <img src="https://img.icons8.com/fluent/96/000000/instagram-new.png"/>
                          </a>
                <tr>
                  <td>
                    <center>
                      <table style="margin:0 auto;" cellspacing="0" cellpadding="5" width="100%">
                        <tr>
                          <td style="text-align:center; margin:0 auto;" width="100%">
                          </td>
                        </tr>
                      </table>
                    </center>
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
      </table>
      </td>
    </tr>
  </table>


  </body>

  </html>`;
};
module.exports.sendEmail = sendEmail;

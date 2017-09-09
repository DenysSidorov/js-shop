import nodemailer from "nodemailer";
// create reusable transporter object using the default SMTP transport
//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
// https://nodemailer.com/about/

// Generate SMTP service account from ethereal.email
export const sendMailForSingup = ({email, nick, link})=> {
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account');
            console.error(err);
            return process.exit(1);
        }
        console.log('Credentials obtained, sending message...');
        // NB! Store the account object values somewhere if you want
        // to re-use the same account for future mail deliveries
        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport(
            {
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                },
                logger: false,
                debug: false // include SMTP traffic in the logs
            },
            {
                // default message fields
                // sender info
                from: '"" <1qazxsw23edccde30@gmail.com>',
                // headers: {'X-Laziness-level': 1000 // just an example header, no need to use this}
            }
        );
        let message = {
            // Comma separated list of recipients
            to: email,
            // Subject of the message
            subject: `Подтверждение почты для ${nick}`, // Subject line
            // plaintext body
            text: 'Для подтверждения регистрации на сайте перейдите по следующей ссылке:', // plaintext body
            // HTML body
            html: `<a>${link}</a>`, // html body
            // На сайте разработчика есть возможность отправлять прикрепленные файлы !
        };

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }
            console.log('Message sent successfully!');
            console.log(nodemailer.getTestMessageUrl(info));
            // only needed when using pooled connections
            transporter.close();
        });
    });
}

// export const sendMailForSingup = ({email, nick, link})=> {
//
//     let smtpTransport = nodemailer.createTransport( mailSettings.backend.mailSend);
//
// // setup e-mail data with unicode symbols
//     let mailOptions = {
//         from: '"" <1qazxsw23edccde30@gmail.com>', // sender address
//         // to: "000scorpions0000@gmail.com, 1qazxsw23edccde30@gmail.com", // list of receivers
//         to: email,
//         subject: 'Подтверждение почты', // Subject line
//         text: 'Для подтверждения регистрации на сайте перейдите по следующей ссылке:', // plaintext body
//         html: `<a>${link}</a>` // html body
//     };
//
// // send mail with defined transport object
//     smtpTransport.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             return console.log(error);
//         } else {
//             console.log('Message sent: ' + info.response);
//             console.log('Message sent: ' + info.messages);
//             console.log('Message sent: ' + info);
//         }
//
//         // shut down the connection pool, no more messages% %
//         smtpTransport.close();
//     });
// }
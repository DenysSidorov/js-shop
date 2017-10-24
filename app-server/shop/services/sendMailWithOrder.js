import nodemailer from "nodemailer";
import mailSettings from "../../../config/index";


export const sendMailWithOrder = ({email = [], order})=> {
    console.log(mailSettings.backend.mailSend, 'mailSettings.backend.mailSend');
    let smtpTransport = nodemailer.createTransport(mailSettings.backend.mailSend);

// setup e-mail data with unicode symbols
    let urlApi = process.env.NODE_ENV == 'development' ? `http://localhost:${mailSettings.frontend.port}` : process.env.SERVER_DOMAIN;
    email = ['1qazxsw23edccde3@gmail.com', '000scorpions000@gmail.com', 'victoriasergeevna989@gmail.com'];
    console.log(process.env.NODE_ENV , 'process.env.NODE_ENV');

    let mailOptions = {
        from: '"Online-shop" <1qazxsw23edccde3@gmail.com>', // sender address
        // to: "000scorpions0000@gmail.com, 1qazxsw23edccde3@gmail.com", // list of receivers
        to: email.join(', '),
        subject: `Заказ товара ${order._id}`,
        text: 'На сайте был совершен заказ товара:', // plaintext body
        html: `<div>
            <p>Name: <b>${order.name}</b></p>
            <p>Price: <b>${order.price}</b></p>
            <p>Phone: <b>${order.phone}</b></p>
            <p>ID: <b>${order._id}</b></p>
            <p>------------</p>
            <a href="${urlApi}/panel">
            Ссылка в админку...</a>
        </div>` // html body
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        } else {
            console.log('Response sent: ' + info.response);
            console.log('Message sent: ' + info.messages);
            console.log('Full-info sent: ' + JSON.stringify(info, null, 4));
        }

        // shut down the connection pool, no more messages% %
        smtpTransport.close();
    });
}
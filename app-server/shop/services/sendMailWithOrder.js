import nodemailer from "nodemailer";
import config from "../../config";
const mailSettings = config['MAIL_SETTINGS'];
// import React from 'react';

const showGoods = (goods) => {
  let res = `${goods.map((g, ind) => (
    `<div>
            <p>${ind}. Имя-<b>${g.name}</b> Модель-<b>${g.model}</b> Цена-<b>${g.price}</b> Кол_во<b>${g.count}</b> ID-<b>${g._id}</b></p>
          </div>`
  ))}`
  // console.log('**** ** ** ',res);
  return res;
}

export const sendMailWithOrder = ({email = [], order}) => {
  console.log(mailSettings, 'mailSettings');
  let smtpTransport = nodemailer.createTransport(mailSettings);

// setup e-mail data with unicode symbols
  let urlApi = config['NODE_ENV'] === 'development' ? `http://127.0.0.1:${config['FRONT_PORT']}` : config['SERVER_DOMAIN'];
  // email = ['1qazxsw23edccde3@gmail.com', '000scorpions000@gmail.com', 'victoriasergeevna989@gmail.com'];
  email = ['000scorpions000@gmail.com', 'doshki.craft@gmail.com'];
  console.log(config['NODE_ENV'], 'process.env.NODE_ENV');
  let html = `<div>
            <p>Name: <b>${order.name}</b></p>
            <p>Price: <b>${order.price}</b></p>
            <p>Phone: <b>${order.phone}</b></p>
            <p>ID: <b>${order._id}</b></p>
            <p>------Товары------</p>
            ${showGoods(order.goods)}
            <a href="${urlApi}/panel">
            Ссылка в админку...</a>
        </div>`;
  // console.log('-----', html);
  let mailOptions = {
    // from: '"Online-shop" <1qazxsw23edccde3@gmail.com>', // sender address
    from: "Магазин-фабрика doshki.com", // sender address
    // to: "000scorpions0000@gmail.com, 1qazxsw23edccde3@gmail.com", // list
    // of receivers
    to: email.join(', '),
    // subject: `Заказ товара ${order._id}`,
    subject: `Заказ товара на doshki.com`,
    text: 'На сайте был совершен заказ товара:', // plaintext body
    html // html body
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

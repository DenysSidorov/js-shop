import nodemailer from 'nodemailer';
import config from '../../config';

const mailSettings = config.MAIL_SETTINGS;

const showGoods = (goods) => {
  const res = `${goods.map(
    (g, ind) =>
      `<div>
            <p>${ind}. Имя-<b>${g.name}</b> Модель-<b>${g.model}</b> Цена-<b>${g.price}</b> Кол_во<b>${g.count}</b> ID-<b>${g._id}</b></p>
          </div>`
  )}`;
  return res;
};

export const sendMailWithOrder = ({email = [], order}) => {
  const smtpTransport = nodemailer.createTransport(mailSettings);
  // setup e-mail data with unicode symbols
  const urlApi = config.NODE_ENV === 'development' ? `http://127.0.0.1:${config.FRONT_PORT}` : config.SERVER_DOMAIN;
  email = ['000scorpions000@gmail.com', 'doshki.craft@gmail.com'];
  const html = `<div>
            <p>Name: <b>${order.name}</b></p>
            <p>Price: <b>${order.price}</b></p>
            <p>Phone: <b>${order.phone}</b></p>
            <p>ID: <b>${order._id}</b></p>
            <p>------Товары------</p>
            ${showGoods(order.goods)}
            <a href="${urlApi}/panel">
            Ссылка в админку...</a>
        </div>`;
  const mailOptions = {
    from: 'Магазин-фабрика doshki.com',
    to: email.join(', '),
    subject: `Заказ товара на doshki.com`,
    text: 'На сайте был совершен заказ товара:', // plaintext body
    html // html body
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log(`Response sent: ${info.response}`);
    console.log(`Message sent: ${info.messages}`);
    console.log(`Full-info sent: ${JSON.stringify(info, null, 4)}`);

    // shut down the connection pool, no more messages% %
    smtpTransport.close();
  });
};

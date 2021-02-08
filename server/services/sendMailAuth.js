import nodemailer from 'nodemailer';
import config from '../config';

const mailSettings = config.MAIL_SETTINGS;

export const sendMailForSignUp = ({email, nick, link}) => {
  console.log('mailSettingsmailSettingsmailSettings', mailSettings);
  const smtpTransport = nodemailer.createTransport(mailSettings);
  // setup e-mail data with unicode symbols
  const urlApi = config.NODE_ENV === 'development' ? `${config.SERVER_DOMAIN}:${config.SERVER_PORT}` : config.SERVER_DOMAIN;
  const mailOptions = {
    from: '"Online-shop" <1qazxsw23edccde30@gmail.com>', // sender address
    to: email,
    subject: `Подтверждение почты для ${nick}`,
    text: 'Для подтверждения регистрации на сайте перейдите по следующей ссылке:', // plaintext body
    html: `<div>
            <p>Вы прошли регистрацию в онлайн магазине. Остался последний этап!</p>
            <a href="${urlApi}/api/ct?t=${link}">
            Для подтверждения нажмите на ссылку...</a>
        </div>`
  };

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

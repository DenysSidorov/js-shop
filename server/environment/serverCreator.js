import http from "http";
import https from "https";
import config from '../config';
import fs from "fs";
import {serverApollo} from '../graphql/config';


export default class ServerCreator {
  static up(app){

    console.log('DEV MODE = ', config.NODE_ENV);
    const isProd = config.NODE_ENV === 'production';

    if (isProd) {
      const privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
      const certificate = fs.readFileSync('./sslcert/certificate.crt', 'utf8');
      const credentials = {key: privateKey, cert: certificate};
      https.createServer(credentials, app);
    } else {
      http.createServer(app);
    }

    app.listen(config.PORT, (err) => {
      if (err) throw err;
      console.log(
        '🚀 Server ready at',
        `${config.SERVER_DOMAIN}:${config.PORT}${serverApollo.graphqlPath}`
      )
    });
  }
}

// todo remove all 127.0.0.1:3000 to ${config.SERVER_DOMAIN}:${config.PORT}

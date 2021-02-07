import http from "http";
import https from "https";
import config from '../config';
import fs from "fs";

export default class ServerCreator {
  static up(){

    const privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
    const certificate = fs.readFileSync('./sslcert/certificate.crt', 'utf8');
    const credentials = {key: privateKey, cert: certificate};


    http.createServer(app);
    https.createServer(credentials, app);

    app.listen(config.PORT, (err) => {
      if (err) throw err;
      console.log(`Server listening on port ${config.PORT}`);
    });
  }
}

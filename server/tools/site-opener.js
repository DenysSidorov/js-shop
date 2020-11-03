import request from 'request';

require('dotenv').config();

export default () => {
  let times = 0;
  const getSite = function q() {
    request(process.env.SITE, function (error, response, body) {
      if (error) {
        console.log(`Error: ${error}`);
      }

      times += 1;
      console.log(times, ' times', new Date().toLocaleString());
    });
  };

  // open site every 25 min
  setInterval(getSite, 1000 * 60 * 10);
  setTimeout(getSite, 3000);
  setTimeout(getSite, 15000);
};

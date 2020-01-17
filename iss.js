const request = require('request');

const fetchMyIP = function(callback) {
    request('https://api.ipify.org?format=json', (error, response, body) => {

    if(error) return callback(error, null);
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
  };

const fetchCoordsByIP = function(ip, callback) {
  request(`https://tools.keycdn.com/geo.json?host=${ip}`, (error, response, body) => {
    if (error) {
      return callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const obj = {latitude: JSON.parse(body)['data']['geo']['latitude'], longitude: JSON.parse(body)['data']['geo']['longitude']};
      console.log(JSON.parse(body)['data']['geo']['latitude']);
      callback(null,obj);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
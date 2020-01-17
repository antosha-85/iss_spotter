const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const data = JSON.parse(body);
      const IP = data["ip"];
      // console.log(IP);
      callback(null,IP);
    }
  });
};
const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords["latitude"]}&lon=${coords["longitude"]}`, (error, response, body) => {
    if (error) {
      return callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const flyOverObject = JSON.parse(body);
      const response = flyOverObject["response"];
      // console.log(IP);
      callback(null,response);
    }
  });
};
const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/invalidiphere${ip}`, (error, response, body) => {
    if (error) {
      return callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const IPObject = JSON.parse(body);
      const latitude = IPObject["data"]["latitude"];
      const longitude = IPObject["data"]["longitude"];
      const geoObject = {};
      geoObject["latitude"] = latitude;
      geoObject["longitude"] = longitude;
      // console.log(IP);
      callback(null,geoObject);
    }
  });
};
module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};
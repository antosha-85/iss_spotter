const fetchMyIP  = require('./iss');
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
const fetchCoordsByIP  = require('./iss');

fetchCoordsByIP('207.228.85.169',(error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , data);
});
const fetchISSFlyOverTimes  = require('./iss');

fetchISSFlyOverTimes({ latitude: '43.63190', longitude: '-79.37160' },(error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , data);
});
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
// fetchCoordsByIP('207.228.86.169', (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , data);
// });
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Fetching IP didn't work!", error);
//     return;
//   }

//   console.log("Fetching IP worked! Returned IP:", ip);

//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       console.log("Fetching coordinates didn't work!", error);
//       return;
//     }
//     console.log("Fetching coordinates worked! Returned coordinates:", coords);

//     fetchISSFlyOverTimes(coords, (error, times) => {
//       if (error) {
//         console.log("Fetching ISS flyover times didn't work!", error);
//         return;
//       }
//       console.log("Fetching ISS flyover times worked! Returned:", times);
//     });
//   });

// });



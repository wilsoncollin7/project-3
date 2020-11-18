const router = require("express").Router();
const trailController = require("../../controllers/trailController");

router.route("/")
  .get(trailController.findAll)
  .post(trailController.create);

router.route("/:id")
  .put(trailController.updateOne)
  .delete(trailController.remove);

module.exports = router;

// const axios = require("axios");


// function ({ searchbar }) {
//    const queryUrl = `https://developer.nps.gov/api/v1/parks?q=${searchbar}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;

//    //to get list of park names, url's, and coodinates for map
//    axios.get(queryUrl).then(function(res) {
//      const parkNames = res.data.fullName;
//      const parkUrl = res.data.url;
//      const coordinates = res.data.latLong;
//    //   const parklatitude = res.data.latitude;
//    //   const parklongitude = res.data.longitude
//       }
//    )
// };

// function ({ searchbar }) {
//    const queryUrl = `https://developer.nps.gov/api/v1/thingstodo?q=${searchbar}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;

//    //to get list of things to do, url's, and coodinates for map if needed
//    axios.get(queryUrl).then(function(res) {
//      const thingstodoNames = res.data.fullName;
//      const thingstodoUrl = res.data.url;
//    //   const thingstodolatitude = res.data.latitude;
//    //   const thingstodolongitude = res.data.longitude;
//       }
//    )
// };